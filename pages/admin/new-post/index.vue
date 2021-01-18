<template>

  <div class="admin-new-post-page">

    <section class="new-post-form">

      <app-admin-post-form @submit="onSubmit">
      </app-admin-post-form>

    </section>

  </div>

</template>

<script>
import { mapActions } from 'vuex';

import AdminPostForm from '../../../components/admin/AdminPostForm';

import { withNamespace as postTypes } from '../../../store/modules/posts';

export default {

  components: {
    'app-admin-post-form': AdminPostForm
  },

  layout: 'admin',

  methods: {

    ...mapActions({
      addPost: postTypes.ADD_POST
    }),

    async onSubmit(postData) {

      const payload = {
        post: postData,
        ctx: this.$config
      };

      try {
        await this.addPost(payload);
        this.$router.push('/admin');
      } catch (e) {
        console.log(e);
      }

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
