import types from './types';

const mutations = {
  [types.withoutNamespace.MUTATE_SET_POSTS]: (state, payload) => state.loadedPosts = payload.posts
};

export default mutations;
