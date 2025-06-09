<template>
 <v-dialog
      v-model="props.dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
    
      >
      {{ msg }}
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Ok"
            @click="emitTest"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>

<script setup>
import { ref,defineProps } from 'vue'

// 프롭스
const props = defineProps({
  dialog: Boolean,
  msg: String,
  
})


// emit

const emitTest =()=>{
    emit('close', 'emit 활성화')
}


const emit = defineEmits(['close'])

</script> 