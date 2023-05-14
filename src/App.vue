<template>
  <nav-bar />
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <page-home />
</template>

<script>
import PageHome from "@/components/PageHome.vue";
import NavBar from "@/components/common/NavBar.vue";
export default {
  name: 'App',
  components: {
    PageHome,
    NavBar
  }
}
</script>

<style>

</style>
