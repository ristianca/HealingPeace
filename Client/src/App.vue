<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { ref } from 'vue'

  export default {
    name: 'App',
    components: {
      NavBar,
      RouterView
    },
    props: {
      titleHeight: ref('100vh')
    }

  }


</script>

<template>
  <header>
    <NavBar />
  </header>
    <RouterView />
</template>

<style scoped>


.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(17, 163, 163, 0.47);
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