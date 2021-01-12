import { withoutNamespace as types } from './types';

const mutations = {
  [types.MUTATE_SET_POSTS]: (state, payload) => state.loadedPosts = payload.posts
};

export default mutations;
