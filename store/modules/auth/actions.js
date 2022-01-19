import { withoutNamespace as types } from './types';

const actions = {
  [types.AUTHENTICATE_USER]: async function(ctx, payload) {
    let url = `:signInWithPassword?key=${ this.$config.firebaseApiKey }`;
    if (!payload.isLogin) {
      url = `:signUp?key=${ this.$config.firebaseApiKey }`;
    }
    try {
      const res = await this.$authApi.$post(url, payload.credentials);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
};

export default actions;