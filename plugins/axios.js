import { setClient } from '@/api/apiClient'

console.log('plugins/axios.js')
export default function ({ $axios, app, redirect, store }) {
  setClient(app.$axios) // 设置axios实例
  $axios.onRequest((config) => {
    console.log('onRequest config' + config)
    console.log('onRequest store' + store)
    const { token } = store.state
    if (!config.url.includes('/account/login') && token) {
      config.headers.common.Authorization = `Bearer ${token}`
      // app.$axios.setToken(store.state.token, 'Bearer')
    }
  })
  $axios.onResponse((response) => {
    console.log('onResponse response' + response)
    return response.data
  })
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
