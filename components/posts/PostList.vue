<template>
  <section class="post-list">
    <!-- loop and render post previews -->
    <app-post-preview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :isAdmin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText"
    >
    </app-post-preview>
  </section>
</template>

<script>
import PostPreview from '../../components/posts/PostPreview';

export default {
  components: {
    'app-post-preview': PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
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
