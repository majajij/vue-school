<script>
import {defineComponent} from 'vue'
import sourceData from "@/data.json";
import PostList from "@/components/PostList.vue";
export default defineComponent({
  name: "ThreadShow",
  props:{
    id: {
      required: true,
      type: String
    }
  },
  components:{
    PostList
  },
  data (){
    return {
      posts: sourceData.posts,
      threads: sourceData.threads
    }
  },
  computed: {
    thread(){
      return this.threads.find(t => t.id === this.id);
    },
    threadPosts(){
      return this.posts.filter(p => p.threadId === this.id)
    }
  },
  methods:{
  }
})
</script>

<template>
<div>
  <div class="mx-40">
    <h2 class="text-center font-bold text-2xl">{{thread.title}}</h2>
    <post-list :posts="threadPosts" />
  </div>
</div>
</template>

<style scoped>

</style>
