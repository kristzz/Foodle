<script>
import { getAuth, signOut } from 'firebase/auth';
import router from '@/router';
import Settings from '../Settings.vue';

export default {
  components: {
    Settings
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
  <Settings />
  <div id="secondaryContainer">
    <div>
        <button @click="signOut" id="SignOutBtn" class="SignUpLogInBtn">Sign Out</button>
    </div>
  </div>
    
</template>

<style>
  body{
    top: 40px;
  }

  #secondaryContainer{
    height: 460px;
    width: 400px;
    position: absolute;
    top: 12rem;
    left: 337px;

    background: var(--vanilla-color);
    border-radius: 0 1rem 1rem 0;
    padding: 20px;
  }

  #SignOutBtn{
    top: 430px;
    left: 40px;
  }
</style>