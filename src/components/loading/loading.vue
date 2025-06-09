<template>
  <v-overlay :model-value="loading" persistent class="d-flex align-center justify-center">
    <div style="display: flex; justify-content: center; align-items: center;">
      <v-progress-circular indeterminate size="64" color="primary" />
    </div>

  </v-overlay>
</template>

<script setup>
import { useLoadingStore } from '@/stores/loading'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const store = useLoadingStore()
const { loading } = storeToRefs(store)


</script>
