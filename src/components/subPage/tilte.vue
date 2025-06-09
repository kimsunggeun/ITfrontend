<template>
  <div class="titleSub">
    {{ title }}

    <div class="buttonBox">
      <useButton :useButton="props.useButton" @click="emit('click', $event)" />
    </div>
  </div>  
</template>

<script setup>
import { ref, watch,onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useButton from '@/components/button/button.vue'

const props = defineProps({
  useButton: Array
})


onMounted(() => {
  console.log(props.useButton,'props.useButton')
  console.log(useRoute(),'tilte')
})

const emit = defineEmits(['click'])
const route = useRoute()
const title = ref(route.meta.title)



watch(() => route.name, (newName) => {
  title.value = newName
})

</script>