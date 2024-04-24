<script setup>
import HeroSection from '../components/HeroSection.vue'
import Parallax from '../components/Parallax.vue'
import { ref } from 'vue'

const pageBreak = ref('25vh')
const titleHeight = ref('100vh')


const welcomeSection = {
  background: '#205a5a',
  header: "We Welcome You...",
  image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1",
  body: `<p>
              Your sanctuary of serenity awaits. We are delighted to introduce you to a world where
              relaxation, rejuvenation, and inner peace merge seamlessly. Our passionate team of
              skilled massage therapists is dedicated to guiding you on a transformative journey of
              self-care, helping you find balance and harmony in both body and mind.
            </p>
            <p>
              At Healing Peace Massage, we understand that modern life can be overwhelming, leaving you feeling physically and mentally drained. Our mission is to provide you with a respite from the demands of daily life, allowing you to reconnect with your inner self and experience the healing power of touch. Step into our tranquil oasis, where every session is meticulously tailored to your individual needs, ensuring that you leave feeling renewed, refreshed, and restored.
            </p>`
}
const woop = {
  background: '#1c3531',
  header: "Services",
  image: "../src/assets/collage-pic.png",
  body: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
  reverse: false,
  show: true
};

</script>

<template>
  <main>
    <Parallax :height="titleHeight" :show-title="true" />
    <HeroSection :title="welcomeSection.header" :image="welcomeSection.image" :body="welcomeSection.body" :bg-color="welcomeSection.background" />
    <Parallax :height="pageBreak" :show-title="false" />
    <HeroSection :title="woop.header" :image="woop.image" :body="woop.body" :img-left="woop.reverse" :bg-color="woop.background" :hero-button="woop.show"/>
  </main>
</template>
