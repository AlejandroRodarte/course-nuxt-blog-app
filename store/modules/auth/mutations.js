import { withoutNamespace as types } from './types';

const mutations = {
  [types.MUTATE_SET_TOKEN]: (state, payload) => state.token = payload.token
};

export default mutations;
