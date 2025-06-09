<template>
    <!-- 스트링 데이터 선언 -->
    <h1>{{ message }}</h1>

    <h1>{{ count }}</h1>

    <!-- 이벤트 닲기  -->
    <v-btn @click="plus()">증가</v-btn>
    <v-btn @click="minus()">감소</v-btn>

    <!-- v-if -->

    <div v-if="count >= 1"> 1이상</div>
    <div v-if="count < 1"> 1미만</div>

    <!-- v-show  --> 
    <div v-show="count >= 1"> 1이상</div>
    <div v-show="count < 1"> 1미만</div>
   
    <!-- v-if , v-show 차이는 v-if는 해당 dom을 완전히 지움 v-show는 그냥 display none (실제로 유지됨) -->

    <!-- v-for -->
    <div v-for="n in 5" :key="n">
    <div>{{n}}</div>
    </div>

    <!-- 심화 -->

    <div v-for="(n,i) in testArrReactive" :key="i">
    <div>{{n.name}}</div>
    <div v-for="(z,x) in n.interests">
       {{ z }}
    </div>

</div>

    
</template>

<script setup>
// 데이터 ref
import { ref, reactive, onMounted } from 'vue'

const message = ref('hello_World!')

const count = ref(0)


const testArrRef = ref([
    {
        name: '성근',
        age: 29,
        interests: {
            coding: ['Vue', 'React', 'TypeScript'],
            hobbies: ['헬스', '게임']
        }
    },
    {
        name: '태훈',
        age: 29,
        interests: {
            coding: ['Vue', 'React', 'TypeScript'],

        }
    }]
)



// ref의 데이터를 다룰때는 .value 붙히기
const plus = () => [
    count.value++
]
const minus = () => {
    count.value--
}

// reactive 
const testArrReactive = reactive([
    {
        name: '성근',
        age: 29,
        interests: {
            coding: ['Vue', 'React', 'TypeScript'],
            hobbies: ['헬스', '게임']
        }
    },
    {
        name: '태훈',
        age: 29,
        interests: {
            coding: ['Vue', 'React', 'TypeScript'],

        }
    }]
)


const reactivefor = () => {
    //ref
    console.log(testArrRef.value[0].interests, 'testArrRef')
    // reactive
    console.log(testArrReactive[0].interests, 'testArrReactive')
}
reactivefor()



</script>