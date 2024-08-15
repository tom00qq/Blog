<script setup>
import Tag from 'primevue/tag';
import { ref } from 'vue';

const categories = ref([
  {
    name: 'Category 1',
    id: 1,
    severity: 'secondary'
  },
  {
    name: 'Secondary',
    id: 2,
    severity: 'secondary'
  },
  {
    name: 'Success',
    id: 3,
    severity: 'success'
  },
  {
    name: 'Info',
    id: 4,
    severity: 'info'
  },
  {
    name: 'Warn',
    id: 5,
    severity: 'warn'
  },
  {
    name: 'Danger',
    id: 6,
    severity: 'danger'
  },
  {
    name: 'Contrast',
    id: 7,
    severity: 'contrast'
  }
]);
</script>

<template>
  <h1>category</h1>

  <div class="flex flex-wrap justify-center gap-2">
    <Tag
      v-for="category in categories"
      :key="category.id"
      :value="category.name"
      :severity="category.severity"
    ></Tag>
  </div>
</template>
