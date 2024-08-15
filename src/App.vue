<script setup>
import { RouterView } from 'vue-router';
import Menubar from 'primevue/menubar';
import { ref } from 'vue';

const items = ref([
  {
    label: '主頁',
    icon: 'pi pi-fw pi-home',
    url: '/'
  },
  {
    label: '文章列表',
    icon: 'pi pi-fw pi-list',
    url: '/article'
  },
  {
    label: '分類',
    icon: 'pi pi-fw pi-tag',
    url: '/category'
  }
]);
</script>

<template>
  <header>
    <Menubar :model="items" />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  width: 90%;
  margin: 0 auto;
}
</style>
