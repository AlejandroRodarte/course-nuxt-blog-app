<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button @click="$router.push('/admin/new-post')">
        Create post
      </app-button>
      <app-button @click="onLogout">
        Logout
      </app-button>
    </section>
    <section class="existing-posts">
      <h1>
        Existing posts
      </h1>
      <!-- post list on admin mode (redirect to /admin/:id when clicking a post) -->
      <app-post-list
        isAdmin
        :posts="loadedPosts"
      >
      </app-post-list>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { withNamespace as postTypes } from '../../store/modules/posts';
import { withNamespace as authTypes } from '../../store/modules/auth';

export default {
  layout: 'admin',
  middleware: 'auth',
  computed: {
    ...mapGetters({
      loadedPosts: postTypes.GET_LOADED_POSTS
    })
  },
  methods: {
    ...mapActions({
      setLogout: authTypes.SET_LOGOUT
    }),
    onLogout() {
      const payload = { redirect: true };
      this.setLogout(payload);
    }
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
