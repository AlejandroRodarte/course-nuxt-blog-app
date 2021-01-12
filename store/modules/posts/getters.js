import types from './types';

const getters = {
  [types.withoutNamespace.GET_LOADED_POSTS]: state => state.loadedPosts
};

export default getters;
