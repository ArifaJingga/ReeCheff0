<template>
  <div>
    <h1>Create Recipe</h1>
    <input v-model="name" type="text" placeholder="Name">
    <textarea v-model="description" placeholder="Description"></textarea>
    <button @click="create">Create</button>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase';

export default {
  data() {
    return {
      name: '',
      description: ''
    };
  },
  methods: {
    async create() {
      await db.collection('recipes').add({
        name: this.name,
        description: this.description
      });
      this.$router.push('/');
    }
  }
};
</script>
