<!-- layouts/default.vue -->

<template>
  <div>
    <header>
      <h1>Recipe App</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/recipes">Recipes</router-link>
        <router-link v-if="currentUser" @click="logout">Logout</router-link>
        <router-link v-else to="/login">Login</router-link>
      </nav>
    </header>
    <main>
      <nuxt />
    </main>
    <footer>
      <p>&copy; 2024 Recipe App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase';

export default {
  data() {
    return {
      currentUser: null
    };
  },
  created() {
    this.getCurrentUser();
  },
  methods: {
    getCurrentUser() {
      const user = firebase.auth().currentUser;
      if (user) {
        this.currentUser = user;
      }
    },
    async logout() {
      try {
        await firebase.auth().signOut();
        this.$router.push('/login'); // Redirect ke halaman login setelah logout
      } catch (error) {
        console.error('Error logging out:', error.message);
      }
    }
  }
};
</script>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: space-between;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
}

main {
  padding: 1rem;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
}
</style>
