<template>
  <component
    :is="tag"
    :target="target"
    :class="classes"
    :to="to"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'

export default {
  props: {
    type: { type: String, required: true },
    to: { type: String, required: true },
    href: { type: String, required: true }
  },

  setup (props: any) {
    let tag = 'button'
    let target

    if (props.to) { tag = 'router-link' }
    if (props.href) {
      tag = 'a'
      target = '_blank'
    }

    const classes = [
      'ui-button',
      `ui-button--${props.type}`
    ]

    return {
      tag,
      target,
      classes
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/settings.scss';

.ui-button {
  $types: 'primary', 'success', 'warning', 'danger', 'info';

  --ui-button-size: var(--button-size, 32px);
  --ui-button-width: var(--button-width);
  --ui-button-padding: var(--button-padding, var(--gap));
  --ui-button-radius: var(--button-radius, 4px);
  --ui-button-background: var(--button-background, rgba(255,255,255, 0.1));

  &:hover {
    --ui-button-background: var(--button-background, rgba(255,255,255, 0.2));
  }

  @each $type in $types {
    &--#{$type} {
      --ui-button-background: var(--button-background, var(--#{$type}));

      &:hover {
        --ui-button-background: var(--button-background-hover, var(--#{$type}-hover));
      }

      &:active, &:focus {
        --ui-button-background: var(--button-background-active, var(--#{$type}-active));
      }
    }
  }

  &--primary {
    --ui-button-background: var(--button-background, var(--primary));
  }

  @extend %resetButton;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--ui-button-width);
  height: var(--ui-button-size);
  padding: 0 var(--ui-button-padding);
  border-radius: var(--ui-button-radius);
  background: var(--ui-button-background);

  &:focus {
    box-shadow: 0 0 0 1px transparent, 0 0 0 2px var(--ui-button-background);
  }
}
</style>
