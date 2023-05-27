<script setup lang='ts'>
defineProps<{
  label?: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <label class="text-sm font-medium leading-6">{{ label }}</label>
    <div class="mt-2">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
