<template>

  <div class="admin-post-page">

    <section class="update-form">

      <app-admin-post-form :post="loadedPost">
      </app-admin-post-form>

    </section>

  </div>

</template>

<script>
import axios from 'axios';

import AdminPostForm from '../../../components/admin/AdminPostForm';

export default {

  components: {
    'app-admin-post-form': AdminPostForm
  },

  layout: 'admin',

  async asyncData(ctx) {

    try {
      const res = await axios.get(`https://nuxtjs-course-blog-app-default-rtdb.firebaseio.com/posts/${ ctx.params.postId }.json`);
      console.log(res);
      return { loadedPost: res.data };
    } catch (e) {
      ctx.error(e);
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
