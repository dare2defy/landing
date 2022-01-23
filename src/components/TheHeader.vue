<template>
  <header class="header">
    <ui-container class="header__container">
      <div class="header-left">
        <ProjectLogo />
      </div>
      <div class="header-right">
        <ui-button to="/" type="primary">
          Button
        </ui-button>
      </div>
    </ui-container>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ProjectLogo from '@/components/ProjectLogo.vue'

@Options({
  components: { ProjectLogo }
})
export default class TheHeader extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  flex: 0 0 80px;
  box-sizing: border-box;
  position: relative;
  z-index: 100;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  &-left {
    display: flex;
    align-items: center;
  }

  &-right {
    display: flex;
    align-items: center;
  }

  //--button-background: #f00;
}
</style>
