<script setup lang='ts'>
import { useRouter } from 'vue-router'
import Logo from './Logo.vue'
import NavMenu from './NavMenu.vue'
import ToggleTheme from './ToggleTheme.vue'
import { useLoginModalStore } from '@/store/modules/loginModal'

const router = useRouter()
const loginModal = useLoginModalStore()
const { open } = loginModal
</script>

<template>
  <header class="w-full py-4 px-4 md:px-10 flex justify-around items-center shadow-sm dark:shadow-slate-800">
    <Logo />
    <NavMenu />
    <div class="flex items-cente gap-4">
      <div>
        <button class="bg-sky-500 px-4 py-1 rounded-md text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" @click="open">
          Sign In
        </button>
        <button class="px-4 py- text-neutral-500" @click="router.push('/register')">
          Sign Up
        </button>
      </div>
      <ToggleTheme />
    </div>
  </header>
</template>

<style scoped></style>
