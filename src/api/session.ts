import request from '@/utils/request'

export function login(data: any): Promise<any> {
  return request({
    url: '/auth/login',
    method: 'post',
    data,
  })
}
