<template>
  <button @click="login">Login</button>
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
