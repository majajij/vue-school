<template>
 <div class="mx-4">
  <div class="text-2xl font-bold">{{ forum.name }}</div>
  <div class="text-xl italic">{{ forum.description }}</div>
  <div class="mt-2">
    <ThreadList :threads="threads"/>
  </div>
 </div>
</template>

<script>
import ThreadList from '@/components/ThreadList.vue'
import DataSource from '@/data.json'
export default {
props:{
  id:{
    type: String,
    required: true
  }
},
components:{ThreadList},
computed: {
  forum(){
    return DataSource.forums.find(f => f.id === this.id)
  },
  threads(){
    return DataSource.threads.filter(t => t.forumId === this.id)
  }
}
}
</script>

<style>

</style>
