<script setup lang='ts'>
import { ref } from 'vue'

defineProps<{
  type?: string
  id: string
  placeholder?: string
  modelValue: string
}>()
defineEmits(['update:modelValue'])

const value = ref('')
</script>

<template>
  <input
    :id="id" v-model="value" :type="type || 'text'" :placeholder="placeholder"
    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    @input="$emit('update:modelValue', value)"
  >
</template>

<style scoped></style>
