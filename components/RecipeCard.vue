<!-- components/RecipeCard.vue -->

<template>
  <div class="recipe-card">
    <h3>{{ recipe.title }}</h3>
    <p>{{ recipe.description }}</p>
    <p>By {{ recipe.author }}</p>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.recipe-card {
  background-color: #f0f0f0;
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>
