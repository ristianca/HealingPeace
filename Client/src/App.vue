<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Parallax from './components/Parallax.vue'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    Parallax,
    NavBar,
    RouterView
  },
  props: {
    titleHeight: ref('100vh')
  }
}
</script>

<template>
  <Parallax :height="titleHeight" />
  <header>
    <NavBar />
  </header>
  <RouterView />
</template>

<style scoped>
header {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: rgba(55, 75, 75, 0.5);
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
  }
}
</style>
