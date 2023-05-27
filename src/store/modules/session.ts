import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { login, register } from '@/api/session'
import type { LoginData, RegisterData } from '@/types/session'

export const useSessionStore = defineStore('session', () => {
  const token = ref<string>(sessionStorage.getItem('token') || '')

  const getToken = computed(() => token.value)

  function setToken(val: string) {
    token.value = val
    sessionStorage.setItem('token', val)
  }

  function signIn(loginData: LoginData): Promise<boolean> {
    return new Promise((resolve, reject) => {
      login(loginData).then((res) => {
        setToken(res.access_token)
        resolve(true)
      }).catch((err) => {
        console.error(err)
        reject(err)
      })
    })
  }

  function registerUser(registerData: RegisterData): Promise<boolean> {
    return new Promise((resolve, reject) => {
      register(registerData).then((res) => {
        if (res.affected)
          resolve(true)
        console.error(res)
      }).catch((err) => {
        console.error(err)
        reject(err)
      })
    })
  }

  return { token, setToken, getToken, signIn, registerUser }
})
