<template>
    <div style="width: 100%; height: 100%;" >
        
        <RealGridVue
            ref="realgrid"
            :auto-generate-field="false"
            :data-props="{ softDeleting: true }"
            :on-initialized="onInitialized">
            <RGDataField v-for="(field, index) in dataProps.fields" :key="field.fieldName + index" v-bind="field"/>
            <RGDataColumn v-for="(column, index) in dataProps.columns" :key="column.fieldName + index" v-bind="column"/>
        </RealGridVue>
    </div>
    
</template>

<script setup lang="ts">
import { columns, fields } from "@/assets/realgrid-data";
import * as RealGrid from "realgrid";
import { RealGridVue, RGDataColumn, RGDataField } from "realgrid-vue";
import { onBeforeMount, onMounted, ref } from "vue";



const row = ref<Array<any>>();
const realgrid = ref<RealGridVue>();
const dataProps = defineProps({
    fields:Array,
    columns:Array,
    rows:Array
})

onBeforeMount(() => {
//     row.value = rows;
});

const onInitialized = (grid: RealGrid.GridBase) => {
    window.gridView = grid
};



defineExpose({realgrid})

</script>
<style></style>
