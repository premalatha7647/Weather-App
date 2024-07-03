<template>
<FormComponent></FormComponent>
</template>
<script setup lang="ts">
import FormComponent from '@/shared/ui/FormComponent.vue';
import { useUsersStore } from '@/stores/users';
import { onMounted } from 'vue';

const userStore = useUsersStore();
 
onMounted(() =>{
    userStore.getUserList()
})
</script>