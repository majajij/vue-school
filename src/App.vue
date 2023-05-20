<template>
<div class="h-full bg-blue-50">
  <nav-bar />
  <div class="px-4 py-4">
    <router-view />
  </div>
</div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
</style>
