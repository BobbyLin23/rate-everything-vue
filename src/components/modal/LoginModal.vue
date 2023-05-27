<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import Modal from './Modal.vue'
import { useLoginModalStore } from '@/store/modules/loginModal'
import { useSessionStore } from '@/store/modules/session'

const loginModal = useLoginModalStore()
const { isOpen } = storeToRefs(loginModal)
const { close } = loginModal

const sessionStore = useSessionStore()

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
})

function handleSubmit() {
  if (!form.email || !form.password)
    return
  sessionStore.signIn(form).then((res) => {
    if (res) {
      router.push('/')
      alert('Success')
      close()
    }
  })
}
</script>

<template>
  <Modal :show="isOpen" title="Sign In" @close="close">
    <form class="space-y-6" @submit="handleSubmit">
      <div>
        <label for="email" class="block text-sm font-medium leading-6">Email address</label>
        <div class="mt-2">
          <input id="email" v-model="form.email" name="email" type="email" autocomplete="email" required class="dark:bg-neutral-700 px-3 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-sky-600 hover:text-sky-500">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input id="password" v-model="form.password" name="password" type="password" required class="dark:bg-neutral-700 px-3 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div class="mb-2">
        <button type="submit" class="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Sign in
        </button>
      </div>
    </form>
  </Modal>
</template>

<style scoped></style>
