import type { LoginData, RegisterData } from '@/types/session'
import request from '@/utils/request'

export function login(data: LoginData): Promise<{
  access_token: string
}> {
  return request({
    url: '/auth/login',
    method: 'post',
    data,
  })
}

export function register(data: RegisterData): Promise<{ affected: number }> {
  return request({
    url: '/users',
    method: 'post',
    data,
  })
}
