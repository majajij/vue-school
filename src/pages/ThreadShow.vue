<script>
import {defineComponent} from 'vue'
import sourceData from "@/data.json";
export default defineComponent({
  name: "ThreadShow",
  props:{
    id: {
      required: true,
      type: String
    }
  },
  data (){
    return {
      posts: sourceData.posts,
      threads: sourceData.threads,
      users: sourceData.users
    }
  },
  computed: {
    thread(){
      return this.threads.find(t => t.id === this.id);
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
})
</script>

<template>
<div>
  <div class="mx-40">
    <h2 class="text-center font-bold text-2xl">{{thread.title}}</h2>
    <div v-for="postId in thread.posts" :key="postId" class="flex bg-white mx-2 my-2 p-3 rounded-2xl">
      <div class="flex w-2/12 flex-col justify-center items-center text-center">
        <div class="text-teal-600 truncate w-20">{{userById(postById(postId).userId).name}}</div>
        <div class="flex -space-x-2 overflow-hidden">
          <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        </div>
        <div class="italic">100 posts</div>
      </div>
      <div class="flex-initial w-10/12 px-2 py-2">
        <p>{{postById(postId).text}}</p>
        <span class="float-right mt-2 italic">{{postById(postId).publishedAt}}</span>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
