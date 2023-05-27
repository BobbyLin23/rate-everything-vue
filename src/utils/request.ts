import axios from 'axios'

const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

request.defaults.withCredentials = true
request.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
request.defaults.headers.post['Content-Type'] = 'application/json'

export default request
