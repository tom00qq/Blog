<script setup>
import ArticleCard from '@/components/ArticleCard.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const articles = ref([
  {
    id: 1,
    title: 'Article 1',
    content: 'Article 1 content',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Article 2',
    content: 'Article 2 content',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    title: 'Article 3',
    content: 'Article 3 content',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    title: 'Article 4',
    content: 'Article 4 content',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 5,
    title: 'Article 5',
    content: 'Article 5 content',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 6,
    title: 'Article 6',
    content: 'Article 6 content',
    image: 'https://via.placeholder.com/150'
  }
]);
</script>

<template>
  <h1>文章列表</h1>
  <div class="article-list">
    <RouterLink
      v-for="article in articles"
      :key="article.id"
      :to="{ name: 'articleDetail', params: { id: article.id } }"
      class="article-link"
    >
      <ArticleCard :article="article" class="article-card" />
    </RouterLink>
  </div>
</template>

<style scoped>
.article-card {
  width: 100%;
  margin: 1.5rem 0;
  transition: transform 0.3s ease-in-out;
}

.article-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transform: scale(1.03);
}

.article-card:hover {
  cursor: pointer;
}

.article-link {
  text-decoration: none;
}
</style>
