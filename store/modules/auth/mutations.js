import { withoutNamespace as types } from './types';

const mutations = {
  [types.MUTATE_SET_TOKEN]: (state, payload) => state.token = payload.token,
  [types.MUTATE_CLEAR_TOKEN]: (state) => state.token = null
};

export default mutations;
