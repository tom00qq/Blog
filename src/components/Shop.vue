<script setup>
import { ref } from 'vue';
import EditProductModal from './EditProductModal.vue';

// data(state)
const isEditModalOpen = ref(false);

// methods
const toggleEditModal = () => {
  isEditModalOpen.value = true;
};
</script>

<template>
  <h1>Shop</h1>
  <div>
    <button type="button" @click="toggleEditModal">新增</button>
  </div>
  <table>
    <thead>
      <tr>
        <th style="width: 30%">標題</th>
        <th style="width: 25%">圖片</th>
        <th style="width: 25%">銷售狀態</th>
        <th style="width: 20%">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Product</td>
        <td>Image</td>
        <td>Status</td>
        <td>
          <button type="button" @click="toggleEditModal">編輯</button>
        </td>
      </tr>
    </tbody>
  </table>

  <EditProductModal v-if="isEditModalOpen" @close="isEditModalOpen = false" />
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}
</style>
