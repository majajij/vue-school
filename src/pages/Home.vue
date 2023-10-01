<template>
  <div class="mx-10 sm:mx-5 md:mx-20 lg:mx-30">
    <div class="">
      <title-text title="Welcome to the forum"/>
      <thread-list :threads="threads"/>
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
      threads: sourceData.threads,
    }
  }
}
</script>

<style scoped>

</style>
