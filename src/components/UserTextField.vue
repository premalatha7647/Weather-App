<template>
  <a-input-group compact>
    <a-input v-model:value="tempdata.firstName" style="width: calc(100% - 200px)" />
    <a-input v-model:value="tempdata.lastName" style="width: calc(100% - 200px)" />
    <a-input v-model:value="tempdata.age" style="width: calc(100% - 200px)" />
    <a-input v-model:value="tempdata.role" style="width: calc(100% - 200px)" />
  </a-input-group>
</template>
<script setup lang="ts">
import type { user } from '@/type/user'
import { computed, type PropType } from 'vue'

const props = defineProps({
  users: {
    type: Object as PropType<user>,
    required: true
  }
})

const tempdata = computed(() => {
  return props.users
})
</script>
