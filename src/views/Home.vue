<template>
  <div class="page page--flex">
    <Hero />
    <TypingPromo />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Hero from '@/components/Hero.vue'
import TypingPromo from '@/components/TypingPromo.vue'

@Options({
  components: {
    Hero,
    TypingPromo
  }
})
export default class Home extends Vue {}
</script>
