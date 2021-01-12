<template>

  <div class="admin-post-page">

    <section class="update-form">

      <app-admin-post-form
        :post="loadedPost"
        @submit="onSubmit"
      >
      </app-admin-post-form>

    </section>

  </div>

</template>

<script>
import axios from 'axios';

import { mapActions } from 'vuex';

import AdminPostForm from '../../../components/admin/AdminPostForm';

import { withNamespace as postTypes } from '../../../store/modules/posts';

export default {

  components: {
    'app-admin-post-form': AdminPostForm
  },

  layout: 'admin',

  async asyncData(ctx) {

    try {
      const res = await axios.get(`${ ctx.$config.baseUrl }/posts/${ ctx.params.postId }.json`);
      return { loadedPost: res.data, postId: ctx.params.postId };
    } catch (e) {
      ctx.error(e);
    }

  },

  methods: {

    ...mapActions({
      editPost: postTypes.EDIT_POST
    }),

    async onSubmit(editedPost) {

      const payload = {
         post: editedPost,
         postId: this.postId,
         ctx: this.$config
      };

      try {
        await this.editPost(payload);
        this.$router.push('/admin')
      } catch (e) {
        console.log(e);
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
