<template>

  <div class="home-page">

    <section class="intro">

      <h1>
        Get the latest tech news
      </h1>

    </section>

    <app-post-list :posts="loadedPosts">
    </app-post-list>

  </div>

</template>

<script>
import PostList from '../components/posts/PostList';

export default {

  components: {
    'app-post-list': PostList
  },

  asyncData(ctx, cb) {

    setTimeout(() => {

      cb(null, {

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

    }, 1500);

  },

}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
