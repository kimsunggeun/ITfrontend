<template>
    <v-btn 
    v-for="e in returnBtn"
    :append-icon="e.icon"
    @click="() => emit('click', e)"
    >
    {{ e.label}}
    </v-btn>





</template>

<script setup>
import { buttonList } from '@/components/button/buttonList.js';
import { onMounted, reactive, ref, watch } from 'vue'
const props = defineProps({
    useButton : Array[String]
})

const emit = defineEmits(['click'])

const returnBtn = reactive([])


watch(
  () => props.useButton,
  (val) => {
    if (Array.isArray(val)) {

      returnBtn.length = 0
      returnBtn.push(...buttonList.filter((x) => val.includes(x.id)))
    }
  },
  { immediate: true }
)







</script>