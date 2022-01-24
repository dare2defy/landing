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
export default {
  props: {
    size: { type: String, default: undefined },
    type: { type: String, default: undefined },
    href: { type: String, default: undefined },
    to: { type: String, default: undefined }
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
      props.type ? `ui-button--${props.type}` : undefined,
      props.size ? `ui-button--${props.size}` : undefined
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
  $sizes: (
    'tiny':    16px,
    'small':   24px,
    'medium':  32px,
    'big':     48px,
    'large':   64px,
  );

  --ui-button-size: var(--button-size, 32px);
  --ui-button-width: var(--button-width);
  --ui-button-padding: var(--button-padding, var(--gap));
  --ui-button-radius: var(--button-radius, 4px);
  --ui-button-background: var(--button-background, rgba(255,255,255, 0.1));
  --ui-button-color: var(--button-color, var(--light));
  --ui-button-shadow: transparent;

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
        --ui-button-shadow: var(--button-shadow, var(--#{$type}-shadow));
      }
    }
  }

  @each $size, $value in $sizes {
    &--#{$size} {
      --ui-button-size: var(--button-size, #{$value});
      --ui-button-padding: var(--button-padding, calc(var(--ui-button-size) / 1.5));
      --ui-button-radius: var(--button-radius, calc(var(--ui-button-size) / 10));
    }
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
  color: var(--ui-button-color);
  transition: background 0.25s, outline 0.25s;

  &:focus {
    outline: 2px solid var(--ui-button-shadow);
    outline-offset: 1px;
  }
}
</style>
