import { withoutNamespace as types } from './types';

const actions = {
  [types.SET_POSTS]: (ctx, payload) => ctx.commit(types.MUTATE_SET_POSTS, payload)
};

export default actions;
