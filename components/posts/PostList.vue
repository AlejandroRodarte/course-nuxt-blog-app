<template>

  <section class="post-list">

      <app-post-preview
        id="1"
        title="Hello there!"
        previewText="This is my first post"
        thumbnail="https://prod-discovery.edx-cdn.org/media/course/image/efc25613-f0ea-4423-bfcd-4d94c317f085-5dd84e82e22b.small.png"
      >
      </app-post-preview>

      <app-post-preview
        id="2"
        title="Sonsayo!"
        previewText="This is my second post"
        thumbnail="https://prod-discovery.edx-cdn.org/media/course/image/efc25613-f0ea-4423-bfcd-4d94c317f085-5dd84e82e22b.small.png"
      >
      </app-post-preview>

      <app-post-preview
        id="3"
        title="Hello man!"
        previewText="This is my third post"
        thumbnail="https://prod-discovery.edx-cdn.org/media/course/image/efc25613-f0ea-4423-bfcd-4d94c317f085-5dd84e82e22b.small.png"
      >
      </app-post-preview>

    </section>

</template>

<script>
import PostPreview from '../../components/posts/PostPreview';

export default {
  components: {
    'app-post-preview': PostPreview
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
