<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  setup() {
    const auth = getAuth();
    const router = useRouter();
    const email = ref('');
    const password = ref('');

    const handleSubmit = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        router.push('home');
      } catch (e) {
        alert(e.message);
      }
    };
    return { email, password, handleSubmit };
  },
};
</script>

<template>
  <header></header>
  
  <main>
    <div id="parent">
      <div id="mainContainer">
        <form @submit.prevent="handleSubmit">
          <input id="Email" class="SignUpLogInSubmit" type="email" v-model="email" placeholder="youremail@example.com">
          <input id="Pass" class="SignUpLogInSubmit" type="password" v-model="password" placeholder="Password">
          <button id="LogIn" class="SignUpLogInBtn">Log In</button>
          <router-link :to="{ name: 'signup' }">
            <div class="RouterRedirect">Sign Up instead</div>
          </router-link>
        </form>
      </div>
    </div>
  </main>

</template>

<style scoped>
  #parent{
    display: grid;
    place-items: center;
    margin: 0;
    padding: 0;
  }

  #mainContainer{
    height: 460px;
    width: 360px;
    position: relative;
    top: 12rem;

    background: var(--vanilla-color);
    border-radius: 5%;
    padding: 20px;
  }

  #LogIn{top: 375px;}

  #Email{top: 150px;}
  #Pass{top: 210px;}
  
  .SignUpLogInBtn{
    width: 220px;
    left: 90px;
  }

  .RouterRedirect{
    top: 455px;
    left: 130px;
  }
</style>