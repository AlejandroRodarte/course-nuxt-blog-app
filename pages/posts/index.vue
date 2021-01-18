<template>

  <div class="posts-page">

    <app-post-list :posts="loadedPosts">
    </app-post-list>

  </div>

</template>

<script>
import { mapGetters } from 'vuex';

import { withNamespace as postTypes } from '../../store/modules/posts';

export default {

  middleware: 'log',

  computed: {

    ...mapGetters({
      loadedPosts: postTypes.GET_LOADED_POSTS
    })

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
