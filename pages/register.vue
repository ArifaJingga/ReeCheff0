<template>
  <div>
    <h1>Register</h1>
    <input v-model="email" type="email" placeholder="Email">
    <input v-model="password" type="password" placeholder="Password">
    <button @click="register">Register</button>
  </div>
</template>

<script>
import { auth } from '~/plugins/firebase';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        await auth.createUserWithEmailAndPassword(this.email, this.password);
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
