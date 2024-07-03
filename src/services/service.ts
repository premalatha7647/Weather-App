import axios from '@/type/axios'
import type { AxiosError } from 'axios'
const { api, userApi } = { ...axios }
async function getUserAccess(data: any) {
  try {
    return await api.post('/getUserAcess', data)
  } catch (error) {
    const _error = error as AxiosError<string>
    return {
      success: false,
      status: _error.response?.status,
      content: null
    }
  }
}

async function getUserList() {
  try {
    return await userApi.get('/users')
  } catch (error) {
    const _error = error as AxiosError<string>
    return {
      success: false,
      status: _error.response?.status,
      content: null
    }
  }
}

export default {
  getUserAccess,
  getUserList
}
