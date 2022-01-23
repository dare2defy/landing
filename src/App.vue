<template>
  <TheHeader />

  <main class="app-main">
    <router-view />
  </main>

  <TheFooter />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

@Options({
  components: {
    TheHeader,
    TheFooter
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '~@/styles/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Orbitron&family=Roboto:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: var(--backgroud);
  color: var(--light);
}

.app-main {
  flex: 1;
}

a {
  color: inherit;
}
</style>
