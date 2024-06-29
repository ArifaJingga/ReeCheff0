<template>
  <div>
    <h1>Search Recipes</h1>
    <input v-model="query" type="text" placeholder="Search">
    <button @click="search">Search</button>
    <ul>
      <li v-for="recipe in recipes" :key="recipe.id">{{ recipe.name }}</li>
    </ul>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase';

export default {
  data() {
    return {
      query: '',
      recipes: []
    };
  },
  methods: {
    async search() {
      const snapshot = await db.collection('recipes').where('name', '==', this.query).get();
      this.recipes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
  }
};
</script>
