<template>

<div class="inputWapper">
  <div class="label"> {{ label }}</div>
<div v-if="mode === 'input'">
    <v-text-field
    v-bind="attrs"
    max-width="330"
    v-model="internalValue"
    variant="outlined"
    hide-details="auto" />
  </div>

  <div v-if="mode === 'select'">
    <v-select 
    v-bind="attrs" 
    :items="itmes"
    :item-title="tilte"
    :item-value="value"
    v-model="internalValue"
    max-width="330"
    variant="outlined"
    hide-details="auto" />

  </div>

</div>
  

</template>

<script setup>
import { computed, useAttrs } from 'vue'


const props = defineProps({
  modelValue: String,
  label: String, 
  outlined: { type: Boolean, default: true },
  dense: { type: Boolean, default: true },
  mode: String,
  value:String,
  tilte:String,
  itmes:Array
})

const emit = defineEmits(['update:modelValue'])


console.log(props)

const attrs = useAttrs()

const internalValue = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})
</script>