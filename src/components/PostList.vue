<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <post-item :post="post" />
    </div>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  name: 'PostList',
  components: {PostItem},
  props:{
    posts:{
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
