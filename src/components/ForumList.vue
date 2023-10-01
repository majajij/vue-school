<template>
  <div>
    <title-text title="Welcome to the forum" />
    <div class="bg-primary px-2 py-2 rounded-bl-3xl font-bold pl-5 text-white">
      Forums
    </div>
    <div class="border-b border-primary rounded-2xl m-2 p-4" v-for="forum in forums" :key="forum.id">
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-2">
          <div class="flex flex-col">
            <div class="text-black">
              <router-link :to="{name: 'Forum', params: {id: forum.id}}">{{forum.name}}</router-link>
            </div>
            <div class="flex flex-row">
              {{forum.description}}
            </div>
          </div>
        </div>
        <div class="items-center justify-center">
          <span class="text-center">
            {{ getThreadsWord(forum) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleText from "@/components/TitleText.vue"

export default {
  props:{
    forums: {
      type: Array,
      required: true
    }
  },
  components:{
    TitleText
  },
  methods:{
    getThreadsWord(forum){
      if (forum.threads?.length) {
        return forum.threads?.length + " " + (forum.threads.length > 1 ? "threads" : "thread")
      } else {
        return "no threads"
      }
    }
  }
}
</script>
