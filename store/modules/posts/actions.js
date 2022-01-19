import { withoutNamespace as types } from './types';

const actions = {
  [types.ADD_POST]: async function(ctx, payload) {
    try {
      // POST request to backend to add post
      const res = await this.$dbApi.$post('/posts.json', payload.post);
      const newPost = {
        id: res.name,
        ...payload.post
      };
      const mutationPayload = { post: newPost };
      // success: mutate store to add post client-side
      ctx.commit(types.MUTATE_ADD_POST, mutationPayload);
    } catch (e) {
      console.log(e);
    }
  },
  [types.SET_POSTS]: (ctx, payload) => ctx.commit(types.MUTATE_SET_POSTS, payload),
  [types.EDIT_POST]: async function(ctx, payload) {
    try {
      // PUT request to backend to edit post
      await this.$dbApi.$put(`/posts/${ payload.postId }.json`, payload.post);
      const mutationPayload = {
        post: {
          id: payload.postId,
          ...payload.post
        }
      };
      // success: mutate store to update post client-side
      ctx.commit(types.MUTATE_EDIT_POST, mutationPayload);
    } catch (e) {
      console.log(e);
    }
  }
};

export default actions;
