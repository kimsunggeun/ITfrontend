<template>
    <div class="nav">
        <div class="logo" @click="toMain"> <img :src="Logo" alt="LS Signature Logo" /> </div>
        <div class="menuZone">
      
                
            <div v-for="link in routerLinks" :key="link.path" class="ml-4">
            <p v-if="!link.children" :to="link.path" class="text-white font-weight-medium">
                {{ link.name }}
            </p>
      
                <v-menu v-else offset-y>
                    
                <template #activator="{ props }">
                    <v-btn v-bind="props" variant="text" class="text-white font-weight-medium">
                        {{ link.name }}
                    </v-btn>
                </template>
             
                    <v-list >
                    <v-list-item  v-for="child in link.children" :key="child.path" :to="`${link.path}/${child.path}`"
                        link router>
                        <v-list-item-title>{{ child.name }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                
            
            </v-menu>
    

            </div>
           
        </div>
        <div class="zone"></div>


    </div>

       
     
   
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import Logo from '@/assets/img/LS_THiRAUTECH_SIGNATURE.png'

const router = useRouter();


const routerLinks = ref([

    {
        path: '/test/demo',
        name: 'test',
        children: [
            { path: 'demo', name: '데모페이지' },

        ]
    },
    {
        path: '/education',
        name: '교육용',
        children: [
            { path: 'databinding', name: '뷰기초문법' },
            { path: 'emitProps', name: 'props/emit' },
            { path: 'Watch', name: 'watch/computed 차이' },


        ]
    }
])

const toMain = () => {
    router.push({
        path: "/",
    });
}

</script>

<style lang="scss">




</style>