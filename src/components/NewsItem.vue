<script setup lang="ts">
import type {News} from '@/types';
import type {PropType} from 'vue';

defineProps({
  news: {
    type: Object as PropType<News>,
    required: true,
  },
});
</script>

<template>
  <div
    :class="{
      'max-w-xl mx-auto bg-white rounded-lg border overflow-hidden p-4 flex flex-col': true,
      'dark:bg-gray-800  dark:border-gray-700': true,
    }"
  >
    <a :href="news?.url">
      <h1 class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ news.title }}</h1>
    </a>

    <p class="mt-2 text-gray-700 dark:text-gray-300">{{ news.description }}</p>

    <div class="mt-4 text-sm text-gray-500 dark:text-gray-400">
      By: <span class="font-semibold">{{ news.author ? news.author : 'Unknown Author' }}</span>
    </div>

    <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">
      Published on:
      <span class="font-semibold">{{
        news.publishedAt ? new Date(news.publishedAt).toLocaleDateString() : ''
      }}</span>
    </div>

    <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">
      Source: <span class="font-semibold">{{ news?.source?.name }}</span>
    </div>

    <div class="flex-1" />

    <div class="mt-4">
      <a
        :href="news?.url"
        class="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </a>
    </div>
  </div>
</template>
