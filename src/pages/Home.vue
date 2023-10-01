<template>
  <div class="mx-10 sm:mx-5 md:mx-20 lg:mx-30">
    <div class="">
      <title-text title="Welcome to the forum"/>
      <thread-list/>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import ThreadList from "@/components/ThreadList.vue";
import TitleText from '@/components/TitleText.vue';
export default {
  components: {
    ThreadList,
    TitleText
  },
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
