<template>
      <v-snackbar
      v-model="messages.isShow"
      :timeout="2000"
      :color="messages.isColor"
    >
      {{ messages.isMessage }}

      <!-- <template v-slot:actions> -->
       
    <!-- </template> -->
    </v-snackbar>

</template>

<script setup>
import { useMessagesStore } from '@/stores/messages'
const messages = useMessagesStore()





</script>