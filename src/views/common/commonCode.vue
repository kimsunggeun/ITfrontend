<route lang="yaml">
    layout: DefaultLayout
    meta:
      title: '공통코드'
    </route>
    
    <template>
        <!-- 현재페이지 -->
        <subTitle :useButton="['Save','Serach','Add','Del']" @click="clickEvent"/>
        <!-- 조회조건 -->
        <div class="searchCondition">
      
            <AppInput mode="select" :itmes="items" v-model="username" label="사용자명" />
            <AppInput mode="input" v-model="username1" label="사용자명" />
            <AppInput mode="input" v-model="username2" label="사용자명" />
            <AppInput mode="input" v-model="username3" label="사용자명" />
    
        </div>
        <!-- 그리드 --> 
        <div class="grdWapper__full">
            <grid ref="grd" :fields="fields" :columns="columns" :rows="rows"/>
        </div>
        <demoPopUp :open="open" @close="open = false" />
    
    
    </template>
<script setup>

import AppInput from '@/components/form/input.vue'
import subTitle from '@/components/subPage/tilte.vue'
import { reactive, ref,onMounted } from 'vue';
import grid from '@/components/grid/grid.vue'
import { ValueType } from "realgrid";
import api  from'@/api/api.js'
import demoPopUp from '@/views/test/demo/demoPopUp.vue'


const username = ref('')
const username1 = ref('')
const username2 = ref('')
const username3 = ref('')
const open = ref(false)



const items = reactive([
    {value:'벨류', title:'타이틀'},
    {value:'벨류1', title:'타이틀1'},
    {value:'벨류2', title:'타이틀2'},
    {value:'벨류3', title:'타이틀3'},
])

</script>
 