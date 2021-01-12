const MODULE_NAME = 'posts';

const GET_LOADED_POSTS = 'getters/getLoadedPosts';
const MUTATE_SET_POSTS = 'mutations/mutateSetPosts';
const SET_POSTS = 'actions/setPosts';

const withoutNamespace = {
  GET_LOADED_POSTS,
  MUTATE_SET_POSTS,
  SET_POSTS
};

const withNamespace = {
  GET_LOADED_POSTS: `${ MODULE_NAME }/${ GET_LOADED_POSTS }`,
  MUTATE_SET_POSTS: `${ MODULE_NAME }/${ MUTATE_SET_POSTS }`,
  SET_POSTS: `${ MODULE_NAME }/${ SET_POSTS }`
};

export { withoutNamespace, withNamespace };
