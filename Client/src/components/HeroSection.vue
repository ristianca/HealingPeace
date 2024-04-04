<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  imgLeft: {
    type: Boolean,
    required: false,
    default: true
  },
  bgColor: {
    type: String,
    required: true
  },
  heroButton: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>
<template>
  <div class="heroSection" :style="{backgroundColor: bgColor}">
    <div class="heroContainer">
      <div class="row" :class="[imgLeft ? '' : 'text-end']">
        <img
          class="hero-img col"
          :class="[imgLeft ? '' : 'order-5']"
          :src="image"
          alt=""
        />
        <div class="col flex-grow-1" style="position: relative;">
          <div class="heroText">
            <h1 class="">{{ title }}</h1>
          </div>
          <!-- {{ body }} eventually replace this v-html with body text once we get around to making the website customizeable -->
          <div class="heroSubtitle" v-html="body">
          </div>
          <div class="heroFooter w-100" v-if="heroButton">
            <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-outline-success" type="button"><h5 class="my-2">View Our Full List of Services</h5></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.heroSection {
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  min-height: 80vh;
  width: 100%;
}

.heroContainer {
  margin: auto;
  max-width: 1280px;
  padding: 3rem;
}

.heroSubtitle {
  color: white;
  font-family: "Comfortaa", sans-serif;
}

.heroText {
  color: rgba(0, 255, 255, .65);
  font-family: "Averia Serif Libre", serif;
}

.heroFooter {
  position: absolute;
  bottom: 6rem;
}

.hero-img {
  max-height: 600px;
  object-fit: cover;
}

h5 {
  font-family: "Averia Serif Libre", serif;
}
</style>
