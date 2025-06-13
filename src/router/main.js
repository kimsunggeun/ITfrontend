// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages";
import { useHistoryStore } from '@/stores/history'
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

import { useAuthStore } from '@/stores/user'



router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  if (to.path === '/Login') return next()
   if (authStore.isAuthenticated) {
      return next()
  } else {
    return next('/Login')
  }
})

router.afterEach((to) => {
  if(to.name !== 'index' && to.name !== 'Login'){
    const historyStore = useHistoryStore()
    historyStore.addPage({path: to.fullPath , name: to.name, title: to.meta.title})
  }



})

export default router;
