<template>

  <div class="admin-post-page">

    <section class="update-form">

      <app-admin-post-form :post="loadedPost">
      </app-admin-post-form>

    </section>

  </div>

</template>

<script>
import AdminPostForm from '../../../components/admin/AdminPostForm';

export default {

  components: {
    'app-admin-post-form': AdminPostForm
  },

  layout: 'admin',

  data() {
    return {
      loadedPost: {
        author: 'Alex',
        title: 'super cool',
        content: 'yay super gay man',
        thumbnailLink: 'https://prod-discovery.edx-cdn.org/media/course/image/efc25613-f0ea-4423-bfcd-4d94c317f085-5dd84e82e22b.small.png'
      }
    }
  }

}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
