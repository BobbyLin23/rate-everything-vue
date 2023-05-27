<script setup lang='ts'>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useSessionStore } from '@/store/modules/session'

const form = reactive({
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
})

const router = useRouter()

const sessionStore = useSessionStore()

function handleSubmit() {
  if (form.password !== form.confirmPassword) {
    alert('Passwords do not match')
    return
  }
  sessionStore.registerUser(form).then((res) => {
    if (res) {
      router.push('/')
      alert('User registered successfully')
    }
  }).catch((err) => {
    console.error(err)
  })
}
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="@/assets/vue.svg" alt="Your Company">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
        Sign Up to Rate Everything
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit="handleSubmit">
        <div>
          <label for="email" class="block text-sm font-medium leading-6">Email address</label>
          <div class="mt-2">
            <input id="email" v-model="form.email" name="email" type="email" autocomplete="email" required class="px-3 dark:bg-neutral-700 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <label for="username" class="block text-sm font-medium leading-6">Username</label>
          <div class="mt-2">
            <input id="username" v-model="form.username" name="username" type="text" autocomplete="username" required class="px-3 dark:bg-neutral-700 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6">Password</label>
          <div class="mt-2">
            <input id="password" v-model="form.password" name="password" type="password" autocomplete="current-password" required class="px-3 dark:bg-neutral-700 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6">ConfirmPassword</label>
          <div class="mt-2">
            <input id="confirmPassword" v-model="form.confirmPassword" name="confirmPassword" type="password" autocomplete="current-password" required class="px-3 dark:bg-neutral-700 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
