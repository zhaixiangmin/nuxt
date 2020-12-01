import request from '@/api/apiClient'
import { commonUrl } from '@/const/api'
export const authApi = `${commonUrl}/auth/v1`

// 登录接口
export const login = (params) =>
  request.publicPost(`${authApi}/auth/account/login`, params)
