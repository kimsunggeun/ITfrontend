// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages";
import { useHistoryStore } from '@/stores/history'
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});



// tobe 라우터가드 만들기
// router.beforeEach((to, from, next) => {

// })


router.afterEach((to) => {
  if(to.name !== 'index'){
    const historyStore = useHistoryStore()``
    historyStore.addPage({path: to.fullPath , name: to.name})
  }



})

export default router;
