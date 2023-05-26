import axios from 'axios'

const request = axios.create({
  url: '/',
  timeout: 5000,
})

export default request
