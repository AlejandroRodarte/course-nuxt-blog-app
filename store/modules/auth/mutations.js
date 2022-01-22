import { withoutNamespace as types } from './types';

const mutations = {
  [types.MUTATE_SET_LOGIN]: (state, payload) => state.token = payload.token,
  [types.MUTATE_SET_LOGOUT]: (state) => {
    state.token = null;
    state.timerId = null;
  },
  [types.MUTATE_SET_TIMER_ID]: (state, payload) => state.timerId = payload.timerId
};

export default mutations;
