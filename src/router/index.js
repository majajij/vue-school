import Home from "@/pages/Home.vue";
import ThreadShow from "@/pages/ThreadShow.vue";
import NotFound from "@/pages/NotFound.vue";
import Forum from "@/pages/Forum.vue";
import {createRouter, createWebHistory} from 'vue-router'
import sourceData from "@/data.json";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: Forum,
    props: true
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      let thread_exist = sourceData.threads.find(t => t.id === to.params.id)
      if (thread_exist)
      {
        return next()
      }
      else{
        next({
          name: 'NotFound',
          params:{pathMatch: to.path.substring(1).split('/')},
          query:to.query,
          hash:to.hash
        })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];
export default createRouter({
  history: createWebHistory(),
  routes
})
