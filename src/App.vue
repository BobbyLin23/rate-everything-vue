<script setup lang="ts">
import { onMounted } from 'vue'
import { useSettingStore } from './store/modules/settings'

const settingStore = useSettingStore()

onMounted(() => {
  settingStore.initSystemTheme()
})
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
