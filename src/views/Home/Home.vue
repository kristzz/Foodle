<script>
import { useRouter } from 'vue-router';
import NavBarVue from '../NavBar.vue';
import FoodCard from '../Home/FoodCard.vue';

export default {
  components: {
    NavBarVue,
    FoodCard
  }
}
</script>

<template>
  <NavBarVue />
  <div id="parent">
    <h1>Foodle</h1>
    <p>the food recipe kingdom</p>
  </div>

  <div>
    <FoodCard />
  </div>
</template>

<style>

</style>