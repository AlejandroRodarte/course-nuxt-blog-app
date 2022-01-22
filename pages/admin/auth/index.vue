<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <!-- signup/signin form -->
      <form @submit.prevent="onSubmit">
        <app-control-input
          type="email"
          v-model="email"
        >
          E-Mail Address
        </app-control-input>
        <app-control-input
          type="password"
          v-model="password"
        >
          Password
        </app-control-input>
        <!-- signup/signin mode depends on boolean prop -->
        <app-button type="submit">
          {{ isLogin ? 'Login' : 'Sign Up' }}
        </app-button>
        <app-button
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
        >
          Switch to {{ isLogin ? 'Signup' : 'Login' }}
        </app-button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { withNamespace as authTypes } from '../../../store/modules/auth'

export default {
  name: 'app-admin-auth-page',
  layout: 'admin',
  middleware: 'anonymous',
  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({
      authenticateUser: authTypes.AUTHENTICATE_USER
    }),
    async onSubmit() {
      const payload = {
        isLogin: this.isLogin,
        credentials: {
          email: this.email,
          password: this.password
        }
      };
      try {
        // perform auth request; if successful, go to dashboard
        await this.authenticateUser(payload);
        this.$router.push('/admin');
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>

