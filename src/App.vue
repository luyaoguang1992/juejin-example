<template>
  <div id="app">
    <app-list></app-list>
    <router-view />
  </div>
</template>

<script>
import AppList from '@/components/AppList.vue'
export default {
  name: 'App',
  components: {
    AppList,
  },
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
</style>
