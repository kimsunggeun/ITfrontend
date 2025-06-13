<route lang="yaml">
layout: DefaultLayout
meta:
  title: '데모 페이지'
</route>

<template>
    <!-- 현재페이지 -->
    <subTitle :useButton="['Save','Serach','Add','Del','Close']" @click="clickEvent"/>
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


const clickEvent =(e)=>{
    if(e.id ==='Save'){
        console.log('Save')
  
    }
      if(e.id ==='Serach'){
        console.log('Serach')
        Serach()
    }
      if(e.id ==='Del'){
        console.log('Del')
    }
      if(e.id==="Add"){
        addRow()
      }
      if(e.id==="Close"){
        open.value = true
      }
}



const grd = ref()

const grdContoll = ref()




onMounted(() => {
    grdContoll.value =  grd.value.realgrid
});





const addRow = () => {
   
    const grid = grdContoll.value.gridView;
    if (grid) {
        const dp = grdContoll.value.dataProvider;
        dp.addRow({});
    }
};  

const Serach = async () =>{
  await api.post('/test/test',null,{
      successMessage: '조회 성공!',
      errorMessage: '조회 실패!'
    })
  .then((res)=>{

  })
  .catch((err)=>{

  })
 

}





// 그리드 데이터

const fields =ref([ {
    fieldName: "KorName",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "Gender",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "Age",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "Phone",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "ProductId",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "KorCountry",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "OrderDate",
    dataType: ValueType.DATETIME,
    datetimeFormat: "yyyy-MM-dd",
    amText: "오전",
    pmText: "오후",
  },
  {
    fieldName: "CardNumber",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "Monetary",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "StartDate",
    dataType: ValueType.DATETIME,
    datetimeFormat: "yyyy-MM-dd",
    amText: "오전",
    pmText: "오후",
  },
  {
    fieldName: "EndDate",
    dataType: ValueType.DATETIME,
    datetimeFormat: "yyyy-MM-dd",
    amText: "오전",
    pmText: "오후",
  },
  {
    fieldName: "ToMonth",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "Month",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "Year",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "InterestRate",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "SaveCost",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "SaveMaturity",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "CurrentSave",
    dataType: ValueType.NUMBER,
  },])
const columns =ref([
    {
    name: "KorName",
    fieldName: "KorName",
    header: {
      text: "이름",
      styleName: "orange-column",
    },
    width: "200",
    // editable: false,
  },
  {
    name: "Monetary",
    fieldName: "Monetary",
    width: "200",
    header: {
      text: "통화",
    },
    styleName: "left-column",
  },
  {
    name: "Gender",
    fieldName: "Gender",
    width: "40",
    header: {
      text: "성별",
    },
  },
  {
    name: "Age",
    fieldName: "Age",
    width: "40",
    header: {
      text: "나이",
    },
    styleName: "right-column",
  },
  {
    name: "Phone",
    fieldName: "Phone",
    width: "100",
    styleName: "right-column",
    header: {
      text: "전화번호",
    },
  },
  {
    name: "ProductId",
    fieldName: "ProductId",
    width: "120",
    styleName: "right-column",
    header: {
      text: "제품번호",
    },
  },
  {
    name: "KorCountry",
    fieldName: "KorCountry",
    width: "100",
    styleName: "right-column",
    header: {
      text: "투자국가",
    },
  },
  {
    name: "OrderDate",
    fieldName: "OrderDate",
    width: "100",
    header: {
      text: "주문일자",
    },
  },
  {
    name: "CardNumber",
    fieldName: "CardNumber",
    width: "140",
    header: {
      text: "카드번호",
    },
  },
  {
    name: "StartDate",
    fieldName: "StartDate",
    width: "100",
    header: {
      text: "최초납입일",
    },
  },
  {
    name: "EndDate",
    fieldName: "EndDate",
    width: "100",
    header: {
      text: "종료일",
    },
  },
  {
    name: "ToMonth",
    fieldName: "ToMonth",
    width: "50",
    header: {
      text: "납입 횟수",
    },
    styleName: "right-column",
  },
  {
    name: "Month",
    fieldName: "Month",
    width: "50",
    header: {
      text: "남은 횟수",
    },
    styleName: "right-column",
  },
  {
    name: "InterestRate",
    fieldName: "InterestRate",
    width: "50",
    header: {
      text: "이율",
    },
    styleName: "right-column",
  },
  {
    name: "SaveCost",
    fieldName: "SaveCost",
    width: "70",
    header: {
      text: "납입금",
    },
    styleName: "right-column",
  },
  {
    name: "SaveMaturity",
    fieldName: "SaveMaturity",
    width: "120",
    header: {
      text: "만기금액",
    },
    styleName: "right-column",
  },
  {
    name: "CurrentSave",
    fieldName: "CurrentSave",
    width: "80",
    header: {
      text: "현재잔액",
    },
    styleName: "right-column",
  },
])
const rows =ref([])
</script>