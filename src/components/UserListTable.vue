<template>
  <a-button @click="setCount()">click me!</a-button>
  <a-table :columns="columns" :data-source="data">
    <template #headerCell="{ column }">
      <template v-if="column.dataIndex === 'firstName'">
        <span>
          <smile-outlined />
          Name
        </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'firstName'">
        <a>
          {{ record.firstName }}
        </a>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import { useUsersStore } from '@/stores/users'
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue'
const userStore = useUsersStore()

const columns = [
  {
    title: 'Name',
    dataIndex: 'firstName',
    key: 'firstNames'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'ages'
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role'
  },
  {
    title: 'Gender',
    key: 'gender',
    dataIndex: 'gender'
  },
  {
    title: 'userName',
    key: 'userName',
    dataIndex: 'userName'
  }
]

const data = userStore.users

const setCount = () => {
  userStore.count = userStore.count + 1
  console.log(userStore.count)
  console.log(userStore)
}
</script>
