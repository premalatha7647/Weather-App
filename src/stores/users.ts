import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { user } from '@/type/user'
import service from '@/services/service'
export const useUsersStore = defineStore('user', () => {
  const users = ref<user[]>([])
  function transformData(data: any) {
    return {
      firstName: data.firstName,
      age: data.age,
      lastName: data.lastName,
      role: data.role
    }
  }

  function getUserList() {
    const response = service.getUserList()
    response.then((res) => {
      res.data.users.splice(0, 10).forEach((element: any) => {
        users.value.push(transformData(element))
      })
      console.log(users.value)
    })
  }
  return { users, getUserList }
})
