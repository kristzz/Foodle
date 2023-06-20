<script>
import NavBarVue from './NavBar.vue';
import { getAuth, signOut } from 'firebase/auth';
import router from '@/router';

export default {
  components: {
    NavBarVue
  },

  methods: {
    async signOut() {
      try {
        const auth = getAuth();
        await signOut(auth);
        // Logout successful, redirect to the login page
        router.push('/login');
      } catch (error) {
        // An error occurred during logout, handle it appropriately
        console.error('Logout error:', error);
      }
    }
  }
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

    <router-link :to="{ name: 'notifications' }" style="text-decoration: none;">
      <div class="RouterLink">Notifications</div>
    </router-link>

    <router-link :to="{ name: 'termsofservice' }" style="text-decoration: none;">
      <div class="RouterLink">Terms Of Service</div>
    </router-link>

    <router-link :to="{ name: 'about' }" style="text-decoration: none;">
      <div class="RouterLink">About page</div>
    </router-link>

    <div class="RouterLink" @click="signOut" id="SignOutBtn">Sign Out</div>
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

#SignOutBtn{
  color: var(--green-color);
}
#SignOutBtn:hover{
  cursor: pointer;
  color: var(--orangey-color);
}
</style>