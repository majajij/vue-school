<template>
  <div class="mx-4">
   <forum-list :forums="forums"/>
  </div>
 </template>

 <script>
 import ForumList from '@/components/ForumList.vue'
 import DataSource from '@/data.json'
 export default {
 props:{
   id:{
     type: String,
     required: true
   }
 },
 components:{ForumList},
 data(){
 return {
   forums : DataSource.forums
 }
 }
 }
 </script>
