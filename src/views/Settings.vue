<script>
import NavBarVue from './NavBar.vue';

export default {
  components: {
    NavBarVue
  },
}
</script>

<template>
  <NavBarVue />
  <div id="mainContainer">
    <router-link :to="{ name: 'account' }" style="text-decoration: none;">
      <div class="RouterLink">Account</div>
    </router-link>

    <router-link :to="{ name: 'security' }" style="text-decoration: none;">
      <div class="RouterLink">Security</div>
    </router-link>

    <router-link :to="{ name: 'changeaccount' }" style="text-decoration: none;">
      <div class="RouterLink">Change account</div>
    </router-link>
  </div>

  <div id="secondaryContainer">
    
  </div>
</template>

<style scoped>

  #mainContainer{
    height: 460px;
    width: 200px;
    position: absolute;
    top: 12rem;
    left: 6rem;

    background: var(--vanilla-color);
    border-radius: 1rem 0 0 1rem;
    padding: 20px;
    border-right: 1px solid var(--black-color);
  }

  .RouterLink {
  color: var(--black-color);
  font-family: var(--text-font);
  font-size: 1.125rem;
  text-decoration: none;
  transition: all 0.1s ease-out 100ms;

  line-height : 50px;
}

.RouterLink:hover {
  transform: scale(1.03);
  color: var(--green-color);
}
</style>