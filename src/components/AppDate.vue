<template>
  <div>
    <span class="italic" :title="humanFriendlyDate(timestamp)">
          {{ diffForHumans(timestamp) }}
    </span>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
export default {
  name: 'AppDate',
  props:{
    timestamp:{
      type: Number,
      required: true
    }
  },
  data (){
    return {
    }
  },
  methods:{
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
