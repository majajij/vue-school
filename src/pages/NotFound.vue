<template>
  <div>
    <div class="text-center">
      <h1 class="text-6xl font-bold">404</h1>
      <p class="mt-4 text-xl text-gray-600">Oops! Page not found</p>
      <p class="mt-2 text-gray-500">The page you are looking for does not exist.</p>
      <router-link :to="{name:'Home'}" class="inline-block mt-4 px-6 py-3 text-white bg-primary rounded-lg shadow-md hover:bg-accent hover:text-black">Go back to homepage</router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
