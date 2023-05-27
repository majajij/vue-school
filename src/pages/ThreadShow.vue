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
    const newPostText = "";
    return {
      posts: sourceData.posts,
      threads: sourceData.threads,
      newPostText
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
    addPost(){
       const postId = "post-"+Math.random()
      const post = {
        id:postId,
        text:this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'
      }
      this.posts.push(post)
      this.thread.posts.push(post)

      this.newPostText = ''
    }
  }
})
</script>

<template>
<div>
  <div class="mx-40">
    <h2 class="text-center font-bold text-2xl">{{thread.title}}</h2>
    <post-list :posts="threadPosts" />
    <div class="mx-4">
      <form @submit.prevent="addPost">
        <div>
          <textarea v-model="newPostText" class="w-full rounded h-20 p-2 bg-gray-100"></textarea>
        </div>
        <div class="float-right">
          <button type="submit" class="btn btn-primary">Submit post</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
