<template>
  <div class="app-list">
    <router-link v-for="item in list" :key="item.path" :to="item.path">
      {{ item.name }}
    </router-link>
  </div>
</template>

<script>
import { routes } from '@/router'
export default {
  name: 'AppList',
  computed: {
    list() {
      return routes.map((item) => {
        return {
          name: item.meta.name,
          path: item.path,
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.app-list {
  padding: 0 16px;
  height: 50px;
  line-height: 50px;
  a {
    margin-right: 16px;
  }
}
</style>
