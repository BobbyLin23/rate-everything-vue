<script setup lang='ts'>
function handleSubmit() {}
</script>

<template>
  <form class="space-y-4 md:space-y-6 border-1 bg-slate-300" @submit="handleSubmit">
    <slot />
  </form>
</template>

<style scoped></style>
