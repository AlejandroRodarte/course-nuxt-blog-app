import { withNamespace as postTypes } from './modules/posts';

const actions = {
  // runs once on server when webapp loads
  async nuxtServerInit(vuexCtx, ctx) {
    try {
      const res = await ctx.app.$dbApi.$get('/posts.json');
      const posts = [];
      for (const key in res) {
        posts.push({
          id: key,
          ...res[key]
        });
      };
      // ...and set them on store
      vuexCtx.dispatch(postTypes.SET_POSTS, { posts });
    } catch (e) {
      console.log(e);
    }
  }
};

export default actions;
