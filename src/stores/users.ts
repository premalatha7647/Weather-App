import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { user } from '@/type/user'
import service from '@/services/service'
import type { AxiosError } from 'axios'
export const useUsersStore = defineStore('user', () => {
  const users = ref<user[]>([])
  const count = 0
  function transformData(data: any) {
    return {
      firstName: data.firstName,
      age: data.age,
      lastName: data.lastName,
      role: data.role,
      email: data.email,
      userName: data.username,
      gender: data.gender
    }
  }

  async function getUserList(): Promise<any> {
    try {
      const { status, data } = await service.getUserList()
      if (status === 200) {
        data?.users?.splice(0, 10).forEach((element: any) => {
          users.value.push(transformData(element))
        })
      }
    } catch (error) {
      const _error = error as AxiosError<string>
      console.log(_error)
    }
  }
  return { users, count, getUserList }
})
