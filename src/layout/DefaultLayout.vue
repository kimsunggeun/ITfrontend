<template>
  <div>
    <navbar />
    <page v-if="!isIndex" />
    
    <main :class="isIndex ?  'index_wapper':'wapper'">
      <router-view />
    </main>

    <footers  v-if="isIndex"/>
  </div>
</template>

<script setup>
import { watch,ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const isIndex = ref(true)


watch(
  () => route.fullPath,
  (newVal, oldVal) => {
    newVal === '/' ? isIndex.value = true : isIndex.value = false
  }
)

console.log(route.fullPath)


import navbar from '@/components/nav/nav.vue'
import page from '@/components/nav/page.vue'


import footers from '@/components/footer/footer.vue'






</script>