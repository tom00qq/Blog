<script setup>
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
import { ref } from 'vue';

const router = useRouter();

const goBack = () => {
  router.back();
};

const article = ref({
  title: 'Article Title',
  date: '2024-01-01 00:00:00',
  image: 'https://via.placeholder.com/1000x500',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  code: 'console.log("Hello World");',
  blockquote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
});
</script>
<template>
  <div class="article-container">
    <Button
      @click="goBack"
      label="Back"
      icon="pi pi-arrow-left"
      class="go-back-button"
      severity="contrast"
      size="small"
    />

    <div v-if="article" class="article-content">
      <div class="article-header">
        <h1 id="article-title">{{ article.title }}</h1>
        <time id="article-date">{{ article.date }}</time>
      </div>
      <img :src="article.image" :alt="article.title" class="article-image" />
      <h2>副標題</h2>
      <p>{{ article.content }}</p>
      <!-- demo code block language html -->
      <pre class="code-block"><code>{{ article.code }}</code></pre>
      <blockquote class="blockquote">
        <p>備註</p>
        {{ article.blockquote }}
      </blockquote>
    </div>
    <div v-else class="loading">Loading article...</div>
  </div>
</template>

<style scoped>
.article-container {
  width: 75%;
  margin: auto;
}

.article-header {
  margin-bottom: 1.5rem;
}

#article-title {
  margin-bottom: 1rem;
}

.go-back-button {
  float: right;
  transition: opacity 0.3s ease-in-out;
}

.go-back-button:hover {
  opacity: 0.8;
}

.article-image {
  margin: auto;
  display: block;
}

img {
  width: 100%;
}

.code-block {
  background-color: black;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
}

.blockquote {
  background-color: #f0f0f0;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border-left: 5px solid #007bff;
}

blockquote p {
  font-weight: bold;
  margin: 0;
}

#article-date {
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 1rem;
  display: block;
}

@media screen and (max-width: 768px) {
  .article-container {
    width: 95%;
  }
}
</style>
