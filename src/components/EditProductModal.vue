<script setup>
const emit = defineEmits(['close']);
const closeModal = () => {
  emit('close');
};
</script>

<template>
  <div class="input-modal">
    <div class="input-modal-content">
      <input type="text" placeholder="標題" />
      <input type="text" placeholder="圖片" />
      <div>
        <button type="button">更新</button>
        <button type="button" @click="closeModal">關閉</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-modal {
  width: 100%;
}
</style>
