import { withoutNamespace as types } from './types';

const actions = {
  [types.AUTHENTICATE_USER]: async function(ctx, payload) {
    let url = `:signInWithPassword?key=${ this.$config.firebaseApiKey }`;
    if (!payload.isLogin) {
      url = `:signUp?key=${ this.$config.firebaseApiKey }`;
    }
    try {
      const res = await this.$authApi.$post(url, {
        ...payload.credentials,
        returnSecureToken: true
      });
      const mutateSetTokenPayload = { token: res.idToken };
      ctx.commit(types.MUTATE_SET_TOKEN, mutateSetTokenPayload);
      const setLogoutTimerPayload = { duration: res.expiresIn * 1000 };
      ctx.dispatch(types.SET_LOGOUT_TIMER, setLogoutTimerPayload);
    } catch (e) {
      console.log(e);
    }
  },
  [types.SET_LOGOUT_TIMER]: function(ctx, payload) {
    setTimeout(() => {
      ctx.commit(types.MUTATE_CLEAR_TOKEN);
    }, payload.duration);
  }
};

export default actions;
