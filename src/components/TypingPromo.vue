<template>
  <section class="typing-promo">
    <ui-container class="hero__container">
      <div class="text">{{ typeText }}</div>
    </ui-container>
  </section>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class TypedPromo extends Vue {
  typeText = ''
  textToBeTyped = [
    'Enjoy your yield and the deflation of the forthcoming supply cap',
    'Fair launch: no pre-sale and open access for everyone'
  ]

  index = 0
  typedTextIndex = this.textToBeTyped.length - 1
  isAdding = true

  playAnim () {
    setTimeout(() => {
      this.typeText = this.textToBeTyped[this.typedTextIndex].slice(0, this.index)
      if (this.isAdding) {
        if (this.index > this.textToBeTyped[this.typedTextIndex].length) {
          this.isAdding = false
          setTimeout(() => {
            this.playAnim()
          }, 2000)
          return
        } else {
          this.index++
        }
      } else {
        if (this.index === 0) {
          this.changeText()
          this.isAdding = true
        } else {
          this.index--
        }
      }
      this.playAnim()
    }, 20)
  }

  changeText () {
    if (this.typedTextIndex === this.textToBeTyped.length - 1) {
      this.typedTextIndex = 0
    } else {
      this.typedTextIndex++
    }
  }

  mounted () {
    this.playAnim()
  }
}
</script>

<style lang="scss" scoped>
.typing-promo {
  padding: var(--gap-big) 0;
}

.text {
  font-size: 24px;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
  text-align: left;

  &::after {
    content: '|';
    animation: blink 1s infinite;
  }
}

@keyframes blink {
  0%, 100% {opacity: 1;}
  50% {opacity: 0;}
}
</style>
