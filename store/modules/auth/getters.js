import { withoutNamespace as types } from './types';

const getters = {
  [types.IS_AUTHENTICATED]: (state) => state.token !== null
};

export default getters;
