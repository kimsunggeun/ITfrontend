<template>
  <div class="titleSub">
    {{ tilte }}

    <div class="buttonBox">
      <useButton :useButton="props.useButton" @click="emit('click', $event)" />
    </div>
  </div>  
</template>

<script setup>
import { useHistoryStore } from '@/stores/history'
import { ref, watch,onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useButton from '@/components/button/button.vue'

const props = defineProps({
  useButton: Array
})


onMounted(() => {
  console.log(props.useButton,'props.useButton')
})

const emit = defineEmits(['click'])

const tilte = ref(useRoute().name)




</script>