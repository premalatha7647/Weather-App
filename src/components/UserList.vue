<template>
  <a-flex align="center" justify="space-between" gap="10">
    <a-list size="small" bordered :data-source="userList" :pagination="pagination">
      <template #renderItem="{ item }">
        <a-list-item>
          <span class="userList" @click="onListClick(item)">{{ item.firstName }}</span>
        </a-list-item>
        <a-list-item>
          <span class="userList" @click="onListClick(item)">{{ item.firstName }}</span>
        </a-list-item>
      </template>
      <template #header>
        <div>User List</div>
      </template>
    </a-list>
    <UserTextField :users="userData" v-if="isClicked"></UserTextField>
  </a-flex>
</template>
<script setup lang="ts">
import UserTextField from '@/components/UserTextField.vue'
import { useUsersStore } from '@/stores/users'
import { onBeforeUpdate, onMounted, onUpdated, ref } from 'vue'

const userStore = useUsersStore()
const userData = ref()
const isClicked = ref(false)
onMounted(() => {
  userStore.getUserList()
  userStore.getUserList()
})
const userList = ref(userStore.users)
const pagination = {
  onChange: (page: number) => {
    console.log(page)
  },
  pageSize: 5
}
const onListClick = (item: any) => {
  isClicked.value = true
  userData.value = item
}
</script>
<style>
.userList {
  cursor: pointer;
}
</style>
