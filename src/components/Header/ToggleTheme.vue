<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import IconSun from '~icons/carbon/sun'
import IconMoon from '~icons/carbon/moon'
import { useSettingStore } from '@/store/modules/settings'

const settingStore = useSettingStore()
const { isDark } = storeToRefs(settingStore)
</script>

<template>
  <div class="rounded-full bg-gray-200 p-2 cursor-pointer hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-500">
    <IconSun v-if="!isDark" @click="settingStore.toggleDark" />
    <IconMoon v-else @click="settingStore.toggleDark" />
  </div>
</template>

<style scoped></style>
