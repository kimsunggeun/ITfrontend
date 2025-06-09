<template>
        <PopUp 
        :open="open"
        @close="close"
        title="데모 팝업" 
        :useButton="['Save','Close']"
        @click="testClick">
        Content 입력칸
        </PopUp>

</template>

<script setup>
import PopUp from '@/components/popup/commonPopUp.vue'
import { ref, watch, computed } from 'vue'


const props = defineProps({
  open: Boolean
})

const open = ref(false)

const emit = defineEmits(['close'])

const close = () => {
    open.value = false;
    emit('close')
}


const testClick = (e) => {
    console.log(e,'e')
    if(e.id === 'Close'){
        close()
    }
}

watch(() => props.open, (newVal) => {
    open.value = newVal
})
</script>

<style scoped>

</style>