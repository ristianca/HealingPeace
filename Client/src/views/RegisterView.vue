<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">Register</h1>

    <form @submit="register">
      <input type="email" name="email" v-model="email" placeholder="email" />
      <br />
      <input type="password" name="password" v-model="password" placeholder="password" />
      <br />
      <button @click="register">Register</button>
    </form>
  </div>
</template>

<style scoped></style>
