<template>
    <div>
      <Settings />
      <div id="secondaryContainer">
        <p>Verify your e-mail:</p>
        <p>Change your password:</p>
        <button @click="sendVerificationEmail" v-if="user && !user.emailVerified">
          Send Verification Email
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import Settings from '../Settings.vue';
  import { onAuthStateChanged, sendEmailVerification } from 'firebase/auth';
  import { ref, onMounted, onUnmounted } from 'vue';
  import { getAuth } from 'firebase/auth';
  
  export default {
    components: {
      Settings
    },
    data() {
      return {
        user: null,
        unsubscribe: null
      };
    },
    mounted() {
      const auth = getAuth();
      this.user = auth.currentUser;
  
      onAuthStateChanged(auth, (currentUser) => {
        this.user = currentUser;
      });
  
      onMounted(() => {
        this.unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          this.user = currentUser;
        });
  
        this.sendVerificationEmail(); // Call the method here
      });
  
      onUnmounted(() => {
        if (this.unsubscribe) {
          this.unsubscribe();
        }
      });
    },
    methods: {
      sendVerificationEmail() {
        sendEmailVerification(this.user)
          .then(() => {
            alert('Verification email sent. Please check your email.');
          })
          .catch((error) => {
            console.error('Error sending verification email:', error);
            alert('Failed to send verification email. Please try again.');
          });
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>