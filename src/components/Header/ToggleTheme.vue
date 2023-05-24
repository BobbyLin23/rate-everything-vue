<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import IconSun from '~icons/carbon/sun'
import IconMoon from '~icons/carbon/moon'

const isDark = ref(false)

function toggleDark() {
  document.documentElement.classList.toggle('dark')
  isDark.value = !isDark.value
}

onMounted(() => {
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    isDark.value = true
  }
  else {
    document.documentElement.classList.remove('dark')
    isDark.value = false
  }
})
</script>

<template>
  <div class="rounded-full bg-gray-200 p-2 cursor-pointer hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-500">
    <IconSun v-if="!isDark" @click="toggleDark" />
    <IconMoon v-else @click="toggleDark" />
  </div>
</template>

<style scoped></style>
