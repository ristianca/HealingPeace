<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="heroSection">
    <div class="heroContainer">
      <div class="heroText">
        <h1 class="text-white">Text Here</h1>
      </div>
      <div class="heroSubtitle">
        <p>Lorem Ipsum et cetera</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.heroSection {
  background-color: #297373;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  min-height: 500px;
  width: 100%;
}

.heroContainer {
  margin: auto;
  max-width: 1280px;
}

.heroSubtitle {
  color: limegreen;
}

.text-white {
  color: white;
}
</style>
