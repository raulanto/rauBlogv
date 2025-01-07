import { createRouter, createWebHistory } from 'vue-router'
import Homeblog from "@/views/Homeblog.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homeblog
    },
  ]
})

export default router
