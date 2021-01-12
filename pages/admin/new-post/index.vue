<template>

  <div class="admin-new-post-page">

    <section class="new-post-form">

      <app-admin-post-form @submit="onSubmit">
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

  methods: {

    onSubmit(postData) {

      axios
        .post('https://nuxtjs-course-blog-app-default-rtdb.firebaseio.com/posts.json', postData)
        .then(console.log)
        .catch(console.log);

    }

  }

}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
