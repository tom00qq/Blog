<script setup>
import Card from 'primevue/card';
import Tag from 'primevue/tag';
</script>

<template>
  <Card>
    <template #title>Simple Card</template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
        repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
        ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <Tag value="# Tag 1" severity="info" class="tag-item"></Tag>
      <Tag value="# Tag 3" severity="info" class="tag-item"></Tag>
      <Tag value="# Tag 4" severity="info" class="tag-item"></Tag>
    </template>
  </Card>
</template>

<style scoped>
.tag-item {
  margin-right: 0.5rem;
}
</style>
