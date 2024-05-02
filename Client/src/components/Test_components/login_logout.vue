<template>
  <a class="nav-link" @click="login">
    <i class="h2 fa-solid fa-circle-user m-0"></i>
    <p class="mb-0" style="font-size: 75%; margin-top: -0.5rem">Log In</p>
  </a>
  <button @click="logoutWithRedirect">Logout</button>
</template>
<script setup>
import { useAuth0 } from '@auth0/auth0-vue'

const { loginWithRedirect } = useAuth0()
const { logout } = useAuth0()
function login() {
  loginWithRedirect()
}

function logoutWithRedirect() {
  logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  })
}
</script>
