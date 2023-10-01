<template>
  <div class="text-center font-bold text-xl mb-2">{{ title }}</div>
</template>

<script>
export default {
  name: 'TitleText',
  props:{
    title: {
      type: String,
      required: true
    },
  }
}
</script>

<style>

</style>
