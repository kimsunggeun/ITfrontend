<template>
  <div>
        <!-- 메세지 박스 -->
    
    <navbar v-if="isNavbar" />
    <page v-if="isPage" />

    <main :class="isStyle">
      <router-view />
    </main>

    <footers v-if="isFooter" />
    <loading />
    <toast/>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// 컴포넌트 import
import navbar from '@/components/nav/nav.vue'
import page from '@/components/nav/page.vue'
import footers from '@/components/footer/footer.vue'
import loading from '@/components/loading/loading.vue'
import toast from '@/components/toast/toast.vue'
import { useAuthStore } from '@/stores/user'
import api  from '@/api/api.js'

const route = useRoute()

const isLoginIndex = ref(route.path === '/' || route.path === '/Login')

const authStore = useAuthStore()

onMounted(()=>{
  setCheck()
  // console.log('hi')
})

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
  if(route.path ==='/'){
    return true
  }
  else{
    return false
  }
})



// 리프레쉬토큰만들기

const setCheck =()=>{
  setInterval(async () => {
  try {
    await api.get("/auth/check");
    console.log("토큰 유효함");
  } catch (e) {
    await authStore.logout() 
    console.warn("토큰 만료 또는 삭제됨");
   
  }
}, 180000); // 30초마다 체크
}

</script>