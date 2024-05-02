<script setup>
import loginLogout from './Test_components/login_logout.vue'
</script>

<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-transparent">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <!-- we can put in a logo prop here to make it more component-like -->
        <img
          src="/src/assets/feather-svgrepo-com.svg" 
          alt="Logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        Healing Peace Massage
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onclick="toggleNavPadding()"
        id="navbarToggler"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">     
            <router-link to="/" class="nav-item nav-link" onclick="hideNav()">Home</router-link>
            <router-link to="/services" class="nav-item nav-link" onclick="hideNav()">Services</router-link>
            <router-link to="/booking" class="nav-item nav-link" onclick="hideNav()">Booking</router-link>
         </ul>
        <ul class="float-end navbar-nav me-md-5 fs-5" id="navEnd">
          <li class="nav-item float-end">
            <a class="nav-link" href="https://www.facebook.com/profile.php?id=100084295332797"><i class="fa-brands fa-facebook"></i></a>
          </li>
          <li class="nav-item float-end">
            <a class="nav-link" href="#"><i class="fa-brands fa-instagram"></i></a>
          </li>
          <li class="nav-item float-end" style="font-size: 1rem; align-self: center;">
            <loginLogout></loginLogout>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand {
  font-family: 'Tangerine', cursive;
  font-weight: 700;
  font-size: 2rem;
  padding-left: 2rem;
}
</style>