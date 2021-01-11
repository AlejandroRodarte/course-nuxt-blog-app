<template>

  <div class="admin-new-post-page">

    <section class="new-post-form">

      <app-admin-post-form></app-admin-post-form>

    </section>

  </div>

</template>

<script>
import AdminPostForm from '../../../components/admin/AdminPostForm';

export default {

  components: {
    'app-admin-post-form': AdminPostForm
  },

  layout: 'admin'

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
