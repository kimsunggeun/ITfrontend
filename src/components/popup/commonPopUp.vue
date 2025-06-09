<template>
  <v-dialog
    v-model="openModel"
    max-width="600"
    persistent
  >
    <v-card>
      <!-- 팝업 상단 -->
      <v-toolbar>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer />
        <v-btn
        icon="mdi-close"
         @click="close"
        />
      </v-toolbar>
      <!-- 팝업 내용 -->
      <v-card-text>
      <slot />
      </v-card-text>


  <!-- 팝업 하단 버튼 -->
      <v-card-actions>
        <v-spacer />
        <useButton :useButton="props.useButton"  @click="emit('click', $event)" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { watch,ref } from 'vue'
import useButton from '@/components/button/button.vue'



const props = defineProps({
  open: Boolean,
  title: String,
  useButton: Array
})

const openModel = ref(false);

const close = () => {
  openModel.value = false
  emit('close')
}


const emit = defineEmits(['close','click'])

watch(() => props.open, (newVal) => {
  openModel.value = newVal
})

</script>

<style scoped>

</style>