<template>
  <div>
    <navbar v-if="isNavbar" />
    <page v-if="isPage" />

    <main :class="isStyle">
      <router-view />
    </main>

    <footers v-if="isFooter" />
    <loading />
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'

// 컴포넌트 import
import navbar from '@/components/nav/nav.vue'
import page from '@/components/nav/page.vue'
import footers from '@/components/footer/footer.vue'
import loading from '@/components/loading/loading.vue'

const route = useRoute()
const isLoginIndex = ref(route.path === '/' || route.path === '/Login')

// 경로 변경 시 업데이트  
watch(
  () => route.path,
  (path) => {
    isLoginIndex.value = path === '/' || path === '/Login'
  }
)
const  isStyle = computed(() => {
  if(route.path ==='/'){
    return 'index_wapper'
  }
  if(route.path ==='/Login'){
    return 'login_wapper'
  }
  else{
    return 'wapper'
  }
})

const  isNavbar = computed(() => {
  if(route.path ==='/'){
    return true
  }
  if(route.path ==='/Login'){
    return false
  }
  else{
    return true
  }
})

const isPage = computed(() => {
  if(route.path ==='/' || route.path ==='/Login'){
    return false
  }
  else{
    return true
  }
})

const isFooter = computed(() => {
  if(route.path ==='/' ){
    return true
  }
  else{
    return false
  }
})


console.log(isStyle.value)
</script>