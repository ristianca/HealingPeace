<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-transparent">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
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
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/homepage">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link">Login</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <ul class="float-end navbar-nav me-5 fs-5">
          <li class="nav-item float-end">
            <a class="nav-link" href="https://www.facebook.com/profile.php?id=100084295332797"
              ><i class="fa-brands fa-facebook"></i
            ></a>
          </li>
          <li class="nav-item float-end">
            <a class="nav-link" href="#"><i class="fa-brands fa-instagram"></i></a>
          </li>
          <li class="nav-item float-end" style="font-size: 1rem; align-self: center">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <loginLogout></loginLogout>
</template>

<script setup>
import loginLogout from './Test_components/login_logout.vue'
</script>

<style scoped>
nav {
  z-index: 1;
}

.navbar-brand {
  font-family: 'Tangerine', cursive;
  font-weight: 700;
  font-size: 2rem;
  padding-left: 2rem;
}
</style>
