<template>
   <v-btn @click="dialog = true">
      팝업창열기
    </v-btn>

    <AppInput mode="input" v-model="msg" />
    <popUp :dialog = dialog :msg =msg  @close="close" />


</template>

<script setup>
import { ref } from 'vue'

import popUp from './popUp.vue';
import AppInput from '@/components/form/input.vue'

const dialog =ref(false)
const msg = ref('')


// emit 홠헝화
const close = (e)=>{
    dialog.value = false
    msg.value = e
}
</script> 