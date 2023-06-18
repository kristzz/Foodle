<script>
import { getAuth, signOut } from 'firebase/auth';
import router from '../router';
import NavBarVue from './NavBar.vue';

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
  <p>
    <button @click="signOut">Sign Out</button>
  </p>
</template>

<style>
  body{
    top: 40px;
  }
</style>