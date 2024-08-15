<script setup>
import ArticleCard from '@/components/ArticleCard.vue';
import { ref } from 'vue';

const articles = ref([
  {
    title: 'Article 1',
    content: 'Article 1 content',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Article 2',
    content: 'Article 2 content',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Article 3',
    content: 'Article 3 content',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Article 4',
    content: 'Article 4 content',
    image: 'https://via.placeholder.com/150'
  }
]);
</script>

<template>
  <h1>Article</h1>
  <div class="article-list">
    <ArticleCard
      v-for="article in articles"
      :key="article.id"
      :article="article"
      class="article-card"
    />
  </div>
</template>

<style scoped>
.article-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
}

.article-card {
  width: 100%;
}
</style>
