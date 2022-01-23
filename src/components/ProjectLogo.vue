<template>
  <router-link class="logo" to="/">
    Metalancer
  </router-link>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class ProjectLogo extends Vue {}
</script>

<style lang="scss" scoped>
.logo {
  --size: var(--logo-size, 40px);

  position: relative;
  color: var(--light);
  font-size: var(--size);
  font-weight: 900;
  font-family: 'Orbitron', sans-serif;
  line-height: 1;
  letter-spacing: calc(var(--size) / 20);
  text-decoration: none;
}
</style>
