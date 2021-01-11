<template>

  <div class="posts-page">

    <app-post-list :posts="loadedPosts">
    </app-post-list>

  </div>

</template>

<script>
import PostList from '../../components/posts/PostList';

export default {

  components: {
    'app-post-list': PostList
  },

  asyncData() {

    return new Promise((res, rej) => {

      setTimeout(() => {

        res({

          loadedPosts: [

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

          ]

        });

      }, 1000);

    });

  }

}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
