<script>

export default {

};
</script>

<template>
  <main>
    <div id="parent">
      <div id="Container">
        <h1>Foodle</h1>
        <p>Welcome to the food recipe kingdom</p>

        <router-link :to="{ name: 'signup' }">
            <div id="SignUpBtn" class="SignUpLogInBtn">Sign Up</div>
        </router-link>

        <router-link :to="{ name: 'login' }">
            <div id="LogInBtn" class="SignUpLogInBtn">Log In</div>
        </router-link>
      </div>
    </div>
  </main>
</template>

<style>

  #parent{
    display: grid;
    place-items: center;
    margin: 0;
    padding: 0;
  }

  #Container{
    height: 460px;
    width: 360px;
    position: relative;
    top: 12rem;

    background: var(--vanilla-color);
    border-radius: 1rem;
    padding: 20px;
  }

  #SignUpBtn{
    top: 370px;
  }
  #LogInBtn{
    top: 435px;
  }
</style>
