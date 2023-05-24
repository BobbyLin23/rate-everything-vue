<script setup lang='ts'>
import Logo from './Logo.vue'
import NavMenu from './NavMenu.vue'
import ToggleTheme from './ToggleTheme.vue'
</script>

<template>
  <header class="w-full py-4 px-4 md:px-10 flex justify-around items-center shadow-sm dark:shadow-slate-800">
    <Logo />
    <NavMenu />
    <div class="flex items-cente gap-4">
      <div>
        <button class="bg-sky-500 px-4 py-1 rounded-2xl text-white">
          Sign In
        </button>
        <button class="px-4 py- text-neutral-500">
          Sign Up
        </button>
      </div>
      <ToggleTheme />
    </div>
  </header>
</template>

<style scoped></style>
