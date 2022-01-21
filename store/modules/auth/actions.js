import { withoutNamespace as types } from './types';

const actions = {
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
      // success; set token and trigger 1h logout timer
      const mutateSetTokenPayload = { token: res.idToken };
      ctx.commit(types.MUTATE_SET_TOKEN, mutateSetTokenPayload);
      const setLogoutTimerPayload = { duration: res.expiresIn * 1000 };
      ctx.dispatch(types.SET_LOGOUT_TIMER, setLogoutTimerPayload);
      // store token and expiration date on local storage
      const userData = {
        token: res.idToken,
        expirationDate: new Date().getTime() + (res.expiresIn * 1000)
      };
      localStorage.setItem('userData', JSON.stringify(userData));
    } catch (e) {
      console.log(e);
    }
  },
  [types.SET_LOGOUT_TIMER]: function(ctx, payload) {
    setTimeout(() => {
      ctx.commit(types.MUTATE_CLEAR_TOKEN);
    }, payload.duration);
  },
  [types.INITIALIZE_AUTHENTICATION]: function(ctx) {
    const stringifiedUserData = localStorage.getItem('userData');
    // no auth data exists
    if (!stringifiedUserData) return;
    const userData = JSON.parse(stringifiedUserData);
    // stored token already expired
    if (new Date().getTime() > userData.expirationDate) return;
    // set token on vuex and trigger timer
    const mutateSetTokenPayload = { token: userData.token };
    ctx.commit(types.MUTATE_SET_TOKEN, mutateSetTokenPayload);
    const setLogoutTimerPayload = { duration: userData.expirationDate - new Date().getTime() };
    ctx.dispatch(types.SET_LOGOUT_TIMER, setLogoutTimerPayload);
  }
};

export default actions;
