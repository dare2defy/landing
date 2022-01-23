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
  position: relative;
  font-size: 40px;
  font-weight: 900;
  font-family: 'Orbitron', sans-serif;
  line-height: 1;
  color: var(--light);
  text-decoration: none;
}
</style>
