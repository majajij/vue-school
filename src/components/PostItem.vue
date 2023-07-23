<template>
  <div>
    <div class="flex bg-white my-2 p-3 rounded-2xl">
      <div class="flex w-2/12 flex-col justify-center items-center text-center">
        <div class="text-teal-600 truncate w-20">{{userById(post.userId).name}}</div>
        <div class="flex -space-x-2 overflow-hidden">
          <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        </div>
        <div class="italic">100 posts</div>
      </div>
      <div class="flex-initial w-10/12 px-2 py-2">
        <p>{{post.text}}</p>
        <span class="float-right mt-2 italic" :title="humanFriendlyDate(post.publishedAt)">
          {{ diffForHumans(post.publishedAt) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
export default {
  name: 'PostItem',
  props:{
    post:{
      type: Object,
      required: true
    }
  },
  data (){
    return {
      users: sourceData.users
    }
  },
  methods:{
    userById(userId){
      return this.users.find(p => p.id === userId)
    },
    diffForHumans(timestamp){
      return dayjs.unix(timestamp).fromNow();
    },
    humanFriendlyDate(timestamp){
      return dayjs.unix(timestamp).format('llll');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
