import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => ({ userState: false}),
  actions: {
    Login() {
      this.userState = true;
    },
    Logout() {
      this.userState = false;
    }
  },
})