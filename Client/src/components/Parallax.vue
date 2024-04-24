<script setup>
defineProps({
  height: {
    type: String,
    required: true
  },
  showTitle: {
    type: Boolean,
    required: false,
    default: true
  }
})
</script>

<template>
  <div class="parallax" :style="{height: height}">
    <div class="titleSplash" v-if="showTitle">
        <h1 class="titleStyle">Healing Peace Massage</h1>
    </div>
  </div>
</template>

<style scoped>
.parallax {
  /* The image used */
    background-image: url("https://images.unsplash.com/photo-1493752689441-72be47db3f91");

  /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.titleSplash {
    color: white;
    position: relative;
    inset: 0px;
    width: fit-content;
    max-width: 100vw;
    height: 100vh;
    align-content: space-evenly;
    margin: auto;
    font-family: 'Tangerine', cursive;
    text-shadow: rgb(0, 48, 49) 1px 0 10px;
}

.titleStyle {
    font-weight: 700;
    font-size: 8rem;
    text-align: center;
}


@media (max-width: 1024px) {
    .titleStyle {
        font-weight: 700;
        font-size: 4rem;
    }
}

</style>
