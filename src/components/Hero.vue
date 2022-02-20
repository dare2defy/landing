<template>
  <section class="hero">
    <ui-container class="hero__container">
      <div class="hero__content">
        <h1>Balancer-inspired DEX and portfolio management on Evmos</h1>
        <p>Join our Early Liquidity Mining program with the target APY of</p>
        <div class="number">250,185%</div>
        <footer>
          <ui-button to="/" type="info" size="big" class="button">
            Invest
          </ui-button>
          <ui-button to="/" type="primary" size="big" class="button">
            Trade
          </ui-button>
        </footer>
        <Subscription />
      </div>
    </ui-container>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Subscription from '@/components/Subscription.vue'

@Options({
  components: {
    Subscription
  }
})
export default class Hero extends Vue {}
</script>

<style lang="scss" scoped>
.hero {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;

  &__container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: var(--gap-big) 0;
    //min-height: calc(100vh - var(--header-size));
  }

  .button {
    margin: var(--gap-half);
    --ui-button-width: 100px;

    @media (max-width: 600px) {
      --ui-button-width: 64px;
    }
  }
}

h1 {
  margin: 0 0 var(--gap-double);
  font-size: 32px;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
}

p {
  margin: var(--gap-double) 0;
  font-size: 24px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
}

.number {
  font-size: 64px;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;

  @media (max-width: 600px) {
    font-size: 32px;
  }
}

footer {
  margin: var(--gap-big) 0 0;
}
</style>
