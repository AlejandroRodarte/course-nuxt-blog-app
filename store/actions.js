import { types as postTypes } from './modules/posts';

const actions = {

  nuxtServerInit(vuexCtx, ctx) {

    return new Promise((res, rej) => {

      setTimeout(() => {

        const posts = [

          {
            id: '1',
            title: 'First post',
            previewText: 'Super cool first post!',
            thumbnail: 'https://prod-discovery.edx-cdn.org/media/course/image/efc25613-f0ea-4423-bfcd-4d94c317f085-5dd84e82e22b.small.png'
          },

          {
            id: '2',
            title: 'Second post',
            previewText: 'Super cool second post!',
            thumbnail: 'https://prod-discovery.edx-cdn.org/media/course/image/efc25613-f0ea-4423-bfcd-4d94c317f085-5dd84e82e22b.small.png'
          }

        ];

        vuexCtx.dispatch(postTypes.withNamespace.SET_POSTS, { posts });

        res();

      }, 1000);

      // to throw errors
      // rej(new Error());

    });

  }

};

export default actions;
