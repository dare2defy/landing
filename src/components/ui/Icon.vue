<template>
  <span class="ui-icon" v-html="svg" />
</template>

<script lang="ts">
import { inlineIcon } from '@/constants/iconsInline'

export default {
  props: {
    name: { type: String, required: true }
  },

  setup (props: any) {
    const svg = inlineIcon(props.name)

    return {
      svg
    }
  }
}
</script>

<style lang="scss">
.ui-icon {
  svg {
    width: 1em;
    height: 1em;
  }
}
</style>
