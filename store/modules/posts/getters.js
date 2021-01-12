import { withoutNamespace as types } from './types';

const getters = {
  [types.GET_LOADED_POSTS]: state => state.loadedPosts
};

export default getters;
