import types from './types';

const actions = {
  [types.withoutNamespace.SET_POSTS]: (ctx, payload) => ctx.commit(types.withoutNamespace.MUTATE_SET_POSTS, payload)
};

export default actions;
