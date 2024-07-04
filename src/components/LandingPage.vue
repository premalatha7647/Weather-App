<template>
  <a-flex align="center" justify="space between" gap="10">
    <!-- <FormComponent></FormComponent> -->
  </a-flex>
  <!-- <UserList></UserList> -->
  <userListTable></userListTable>
  <span>{{ userStore.count }}</span>
</template>
<script setup lang="ts">
import FormComponent from '@/shared/ui/FormComponent.vue'
import UserList from './UserList.vue'
import userListTable from '@/components/UserListTable.vue'
import { useUsersStore } from '@/stores/users'
import { onMounted, ref } from 'vue'

const userStore = useUsersStore()
onMounted(async () => {
  await userStore.getUserList()
  // const [acct, perm] = await Promise.all([userStore.getUserList(), userStore.getUserList()])
})
</script>
