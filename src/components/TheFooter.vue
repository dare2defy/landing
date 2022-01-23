<template>
  <footer>
    <ui-container class="container">
      <nav>
        <ul>
          <li v-for="(item, index) in menu" :key="index">
            <router-link v-if="item.to" :to="item.to">
              {{ item.label }}
            </router-link>
            <a v-if="item.href" :href="item.href" target="_blank">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <nav class="networks">
        <ul>
          <li v-for="(item, index) in networks" :key="index">
            <a :href="item.link" target="_blank">
              <UiIcon :name="item.icon" :title="item.icon" />
            </a>
          </li>
        </ul>
      </nav>
    </ui-container>
  </footer>
</template>

<script lang="ts">
import { icon } from '@/constants/icons'

export default {
  name: 'TheFooter2',

  setup () {
    const menu = [
      {
        label: 'Invest app',
        href: '#invest'
      },
      {
        label: 'Trade app',
        href: '#trade'
      },
      {
        label: 'Whitepaper',
        to: '#whitepaper'
      },
      {
        label: 'Community',
        href: '#community'
      },
      {
        label: 'Careers',
        to: '#careers'
      }
    ]

    const networks = [
      {
        icon: 'discord',
        link: '#discord'
      },
      {
        icon: 'github',
        link: '#github'
      },
      {
        icon: 'twitter',
        link: '#twitter'
      }
    ]

    return {
      menu,
      networks,
      icon
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  flex: 0 0 250px;
  position: relative;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

ul {
  display: flex;
  gap: var(--gap);
  list-style: none;
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.networks {
  font-size: var(--gap-double);

  ul {
    gap: var(--gap-double);
  }
}
</style>
