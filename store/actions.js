import axios from 'axios';

import { withNamespace as postTypes } from './modules/posts';

const actions = {

  async nuxtServerInit(vuexCtx, ctx) {

    try {

      const res = await axios.get('https://nuxtjs-course-blog-app-default-rtdb.firebaseio.com/posts.json');

      const posts = [];

      for (const key in res.data) {

        posts.push({
          id: key,
          ...res.data[key]
        });

      };

      vuexCtx.dispatch(postTypes.SET_POSTS, { posts });

    } catch (e) {
      console.log(e);
    }

  }

};

export default actions;
