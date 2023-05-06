<template>
<div>
  hello from home page
</div>
  <div v-for="thread in threads" :key="thread.id">

  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  name: "PageHome",
  data (){
    return {
      posts: sourceData.posts,
      threads: sourceData.threads,
      users: sourceData.users
    }
  },
  methods:{
    postById(postId){
      return this.posts.find(p => p.id === postId)
    },
    userById(userId){
      return this.users.find(p => p.id === userId)
    }
  }
}
</script>

<style scoped>

</style>
