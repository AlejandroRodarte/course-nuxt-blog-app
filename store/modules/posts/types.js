const MODULE_NAME = 'posts';
const GET_LOADED_POSTS = 'getters/getLoadedPosts';
const MUTATE_ADD_POST = 'mutations/addPost';
const MUTATE_EDIT_POST = 'mutations/editPost';
const MUTATE_SET_POSTS = 'mutations/mutateSetPosts';
const ADD_POST = 'actions/addPost';
const EDIT_POST = 'actions/editPost';
const SET_POSTS = 'actions/setPosts';

const withoutNamespace = {
  GET_LOADED_POSTS,
  MUTATE_ADD_POST,
  MUTATE_EDIT_POST,
  MUTATE_SET_POSTS,
  ADD_POST,
  EDIT_POST,
  SET_POSTS
};

const withNamespace = {
  GET_LOADED_POSTS: `${ MODULE_NAME }/${ GET_LOADED_POSTS }`,
  MUTATE_ADD_POST: `${ MODULE_NAME }/${ MUTATE_ADD_POST }`,
  MUTATE_EDIT_POST: `${ MODULE_NAME }/${ MUTATE_EDIT_POST }`,
  MUTATE_SET_POSTS: `${ MODULE_NAME }/${ MUTATE_SET_POSTS }`,
  ADD_POST: `${ MODULE_NAME }/${ ADD_POST }`,
  EDIT_POST: `${ MODULE_NAME }/${ EDIT_POST }`,
  SET_POSTS: `${ MODULE_NAME }/${ SET_POSTS }`
};

export { withoutNamespace, withNamespace };
