<script>

</script>

<template>
  <nav>
    <div class="logo">
      <img src="" alt="logo" />
    </div>

    <div class="buttons">
      <router-link :to="{ name: 'home' }" style="text-decoration: none;">
        <div class="RouterLink">Home</div>
      </router-link>

      <router-link :to="{ name: 'search' }" style="text-decoration: none;">
        <div class="RouterLink">Search</div>
      </router-link>

      <router-link :to="{ name: 'settings' }" style="text-decoration: none;">
        <div class="RouterLink">Settings</div>
      </router-link>
    </div>
  </nav>
</template>

<style>
  nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 100px;
  padding-left: 20px;
  background-color: var(--orangey-color);
  border-bottom: 1px solid var(--black-color);
}

.logo img {
  width: 50px;
  height: 50px;
}

.buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 35px;
}

.RouterLink {
  color: var(--black-color);
  font-family: var(--text-font);
  font-size: 1.125rem;
  text-decoration: none;
  transition: all 0.1s ease-out 100ms;
}

.RouterLink:hover {
  transform: scale(1.03);
  color: var(--white-color);
}
</style>