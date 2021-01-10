<template>

  <div class="home-page">

    <section class="intro">

      <h1>
        Get the latest tech news
      </h1>

    </section>

    <div class="featured-posts">
      <app-post-preview
        :id="1"
        title="Hello there!"
        previewText="This is my first post"
        thumbnail="https://prod-discovery.edx-cdn.org/media/course/image/efc25613-f0ea-4423-bfcd-4d94c317f085-5dd84e82e22b.small.png"
      >
      </app-post-preview>
      <app-post-preview
        :id="2"
        title="Sonsayo!"
        previewText="This is my second post"
        thumbnail="https://prod-discovery.edx-cdn.org/media/course/image/efc25613-f0ea-4423-bfcd-4d94c317f085-5dd84e82e22b.small.png"
      >
      </app-post-preview>
      <app-post-preview
        :id="3"
        title="Hello man!"
        previewText="This is my third post"
        thumbnail="https://prod-discovery.edx-cdn.org/media/course/image/efc25613-f0ea-4423-bfcd-4d94c317f085-5dd84e82e22b.small.png"
      >
      </app-post-preview>
    </div>

  </div>

</template>

<script>
import PostPreview from '../components/posts/PostPreview';

export default {
  components: {
    'app-post-preview': PostPreview
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
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

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
