import Cookie from 'js-cookie';
import { withoutNamespace as types } from './types';

const actions = {
  // signin/signup action (always runs on client)
  [types.AUTHENTICATE_USER]: async function(ctx, payload) {
    // set url depending on signin or signup
    let url = `:signInWithPassword?key=${ this.$config.firebaseApiKey }`;
    if (!payload.isLogin) {
      url = `:signUp?key=${ this.$config.firebaseApiKey }`;
    }
    try {
      // send credentials to backend
      const res = await this.$authApi.$post(url, {
        ...payload.credentials,
        returnSecureToken: true
      });
      const now = new Date().getTime();
      const expiresIn = res.expiresIn * 1000;
      // success; set token and trigger 1h logout timer
      const mutateSetLoginPayload = { token: res.idToken };
      ctx.commit(types.MUTATE_SET_LOGIN, mutateSetLoginPayload);
      const setLogoutTimerPayload = { duration: expiresIn };
      ctx.dispatch(types.SET_LOGOUT_TIMER, setLogoutTimerPayload);
      // store token and expiration date on local storage (client) and cookie (server)
      const userData = {
        token: res.idToken,
        expirationDate: now + expiresIn
      };
      const stringifiedUserData = JSON.stringify(userData);
      localStorage.setItem('userData', stringifiedUserData);
      Cookie.set(
        'userData',
        stringifiedUserData,
        {
          sameSite: 'Lax',
          expires: 365
        }
      );
      // call our server-middleware api
      const trackDataPayload = { data: `User ${payload.credentials.email} authenticated.` };
      await this.$proxyApi.$post('/track-data', trackDataPayload);
    } catch (e) {
      console.log(e);
    }
  },
  // trigger logout timer
  [types.SET_LOGOUT_TIMER]: function(ctx, payload) {
    // clear previous timer
    clearTimeout(ctx.state.timerId);
    // timeout to clean auth data and redirect
    const timerId = setTimeout(() => {
      const setLogoutPayload = { redirect: true };
      ctx.dispatch(types.SET_LOGOUT, setLogoutPayload);
    }, payload.duration);
    // track current timer id
    const mutateSetTimerIdPayload = { timerId };
    ctx.commit(types.MUTATE_SET_TIMER_ID, mutateSetTimerIdPayload);
  },
  // logout
  [types.SET_LOGOUT]: function(ctx, payload) {
    // clear current timer
    clearTimeout(ctx.state.timerId);
    // clear auth/ vuex store
    ctx.commit(types.MUTATE_SET_LOGOUT);
    // delete auth data on local storage and cookie
    localStorage.removeItem('userData');
    Cookie.remove('userData');
    // redirect to signin/signup form if requested
    if (payload.redirect && this.$router.history.current.path.startsWith('/admin')) this.$router.replace('/admin/auth');
  },
  // one-shot authentication check
  [types.INITIALIZE_AUTHENTICATION]: function(ctx, payload) {
    let stringifiedUserData = undefined;
    // code runs on client; try to extract auth data from local storage
    if (process.client) stringifiedUserData = localStorage.getItem('userData');
    // code runs on server but there are no cookies set; it's a non-authenticated user
    else if (!payload.cookie) return;
    // code runs on server and there are cookies set; check for 'userData' cookie
    else {
      const [, rawUserDataCookie] = payload.cookie.split(';').find(c => c.trim().startsWith('userData=')).split('=');
      stringifiedUserData = decodeURIComponent(rawUserDataCookie);
    }
    // no auth data exists
    if (!stringifiedUserData) return;
    const userData = JSON.parse(stringifiedUserData);
    const now = new Date().getTime();
    const expiresIn = userData.expirationDate - now;
    // stored token expired
    if (expiresIn <= 0) return;
    // stored token has not expired; set token on vuex
    const mutateSetLoginPayload = { token: userData.token };
    ctx.commit(types.MUTATE_SET_LOGIN, mutateSetLoginPayload);
  }
};

export default actions;
