<template>
  <div>
    <h1 class="text-center font-bold text-xl">Welcome to the forum</h1>
    <div class="bg-primary px-2 py-2 rounded-bl-3xl font-bold pl-5 text-white">
      Threads
    </div>
    <div class="odd:bg-gray-200 rounded-2xl even:bg-secondary m-2 p-4" v-for="thread in threads" :key="thread.id">
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-2">
          <div class="flex flex-col">
            <div class="text-primary">
              <router-link :to="{name: 'ThreadShow', params: {id: thread.id}}">{{thread.title}}</router-link>
            </div>
            <div class="flex flex-row">
              By <span class="ml-1 text-primary">{{userById(thread.userId).name}}</span>, <app-date class="ml-1" :timestamp="thread.publishedAt" />
            </div>
          </div>
        </div>
        <div class="items-center justify-center">
          <span class="text-center">
            {{thread.posts.length}} replies
          </span>
        </div>
        <div class="flex flex-row">
          <div class="mr-3">
            <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          </div>
          <div class="flex flex-col">
            <div class="font-bold text-primary truncate w-20">{{userById(thread.userId).name}}</div>
            <app-date :timestamp="thread.publishedAt" />
          </div>
        </div>
      </div>
    </div>
<!--    <div v-for="thread in threads" :key="thread.id">
      <h2 class="text-center font-bold text-lg">{{thread.title}}</h2>
      <div v-for="postId in thread.posts" :key="postId" class="flex bg-white mx-2 my-2 px-3 rounded">
        <div class="flex w-2/12 flex-col justify-center items-center text-center">
          <div class="text-teal-600">{{userById(postById(postId).userId).name}}</div>
          <div class="flex -space-x-2 overflow-hidden">
            <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          </div>
          <div class="italic">100 posts</div>
        </div>
        <div class="flex-initial w-10/12 px-2 py-2">
          <p>{{postById(postId).text}}</p>
          <span class="float-right mt-2">{{postById(postId).publishedAt}}</span>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import sourceData from "@/data.json";
export default {
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

<style lang="scss" scoped>

</style>
