<template>
  <div class="page">
  <v-chip-group>
  <v-chip v-for=" (e,i) in historyStore.visitedPages"  @click="toRouter(e.path)"  size="small">{{ e.title  }} 
    <v-icon @click="removeChip(e.name,i)" style="margin-left: 4px;">mdi-close-circle-outline</v-icon>
</v-chip>

</v-chip-group>
    
</div>  
   
</template> 

<script setup>
import { useHistoryStore } from '@/stores/history'
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const historyStore = useHistoryStore()
const router = useRouter()
const route = useRoute()

const toRouter = (path) => {
  if (route.path !== path) {
    router.push({ path })
  }
}



const removeChip = (name, index) => {
  if (route.name !== name || historyStore.visitedPages.length === 0) return;

  const prev = historyStore.visitedPages[index - 1];
  const next = historyStore.visitedPages[index + 1];

  const targetPage = prev || next;

  if (targetPage) {
    router.push({ path: targetPage.path }); 
  }

  historyStore.delPage(name);
};

watch(
  () => historyStore.visitedPages,
  (newVal, oldVal) => {
    if(newVal.length === 0){
        router.push({
        path: "/",
    });
    }
  }
)
</script>
