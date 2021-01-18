import { withNamespace as postTypes } from './modules/posts';

const actions = {

  async nuxtServerInit(vuexCtx, ctx) {

    try {

      const res = await ctx.app.$axios.$get('/posts.json');

      const posts = [];

      for (const key in res) {

        posts.push({
          id: key,
          ...res[key]
        });

      };

      vuexCtx.dispatch(postTypes.SET_POSTS, { posts });

    } catch (e) {
      console.log(e);
    }

  }

};

export default actions;
