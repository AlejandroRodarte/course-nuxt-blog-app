<template>

  <div class="admin-page">

    <section class="new-post">

      <app-button @click="$router.push('/admin/new-post')">
        Create post
      </app-button>

    </section>

    <section class="existing-posts">

      <h1>
        Existing posts
      </h1>

      <app-post-list
        isAdmin
        :posts="loadedPosts"
      >
      </app-post-list>

    </section>

  </div>

</template>

<script>
import { mapGetters } from 'vuex';

import { withNamespace as postTypes } from '../../store/modules/posts';

export default {

  layout: 'admin',

  computed: {

    ...mapGetters({
      loadedPosts: postTypes.GET_LOADED_POSTS
    })

  }

}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
