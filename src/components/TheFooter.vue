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
footer {
  padding: var(--gap) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--gap-double);
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  margin: 0;
  padding: 0;
  list-style: none;
  white-space: nowrap;
}

a {
  display: flex;
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
