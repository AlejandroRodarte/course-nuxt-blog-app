import { withoutNamespace as types } from './types';

const actions = {

  [types.ADD_POST]: async function(ctx, payload) {

    try {

      const res = await this.$axios.$post('/posts.json', payload.post);

      const newPost = {
        id: res.name,
        ...payload.post
      };

      const mutationPayload = { post: newPost };

      ctx.commit(types.MUTATE_ADD_POST, mutationPayload);

    } catch (e) {
      console.log(e);
    }

  },

  [types.SET_POSTS]: (ctx, payload) => ctx.commit(types.MUTATE_SET_POSTS, payload),

  [types.EDIT_POST]: async function(ctx, payload) {

    try {

      await this.$axios.$put(`/posts/${ payload.postId }.json`, payload.post);

      const mutationPayload = {
        post: {
          id: payload.postId,
          ...payload.post
        }
      };

      ctx.commit(types.MUTATE_EDIT_POST, mutationPayload);

    } catch (e) {
      console.log(e);
    }

  }

};

export default actions;
