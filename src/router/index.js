import PageHome from "@/components/PageHome.vue";
import PageThreadShow from "@/components/PageThreadShow.vue";
import PageNotFound from "@/components/PageNotFound.vue";
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound
  }
];
export default createRouter({
  history: createWebHistory(),
  routes
})
