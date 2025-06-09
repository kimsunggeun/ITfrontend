<template>
   
 <v-progress-circular
  indeterminate
  color="primary"
  size="48"
  v-if="loading"
/>
</template>

<script setup>
import { useLoadingStore } from '@/store/loading'
import { storeToRefs } from 'pinia'

const store = useLoadingStore()
const { loading } = storeToRefs(store)

console.log('로딩')
</script>
