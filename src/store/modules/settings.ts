import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingStore = defineStore('settings', () => {
  const isDark = ref(localStorage.getItem('theme') === 'dark')

  function toggleDark() {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  function initSystemTheme() {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      isDark.value = true
    }
    else {
      document.documentElement.classList.remove('dark')
      isDark.value = false
    }
  }

  return { isDark, toggleDark, initSystemTheme }
})
