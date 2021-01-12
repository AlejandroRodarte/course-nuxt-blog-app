import axios from 'axios';

import { withoutNamespace as types } from './types';

const actions = {

  [types.ADD_POST]: async (ctx, payload) => {

    try {

      const res = await axios.post('https://nuxtjs-course-blog-app-default-rtdb.firebaseio.com/posts.json', payload.post);

      const newPost = {
        id: res.data.name,
        ...payload.post
      };

      const mutationPayload = { post: newPost };

      ctx.commit(types.MUTATE_ADD_POST, mutationPayload);

    } catch (e) {
      console.log(e);
    }

  },

  [types.SET_POSTS]: (ctx, payload) => ctx.commit(types.MUTATE_SET_POSTS, payload),

  [types.EDIT_POST]: async (ctx, payload) => {

    try {

      await axios.put(`https://nuxtjs-course-blog-app-default-rtdb.firebaseio.com/posts/${ payload.postId }.json`, payload.post);

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
