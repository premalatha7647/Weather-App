import axios from '@/type/axios'
const { api, userApi } = { ...axios }

async function getUserAccess(data: any) {
  return await api.post('/getUserAcess', data)
}

async function getUserList() {
  return await userApi.get('/users')
}

export default {
  getUserAccess,
  getUserList
}
