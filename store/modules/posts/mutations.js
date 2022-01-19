import { withoutNamespace as types } from './types';

const mutations = {
  [types.MUTATE_ADD_POST]: (state, payload) => state.loadedPosts = [ ...state.loadedPosts, payload.post ],
  [types.MUTATE_SET_POSTS]: (state, payload) => state.loadedPosts = payload.posts,
  [types.MUTATE_EDIT_POST]: (state, payload) => {
    const postIndex = state.loadedPosts.findIndex(post => post.id === payload.post.id);
    state.loadedPosts[postIndex] = payload.post;
  }
};

export default mutations;
