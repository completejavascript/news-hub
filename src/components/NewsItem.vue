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
  <div className="max-w-xl mx-auto bg-white rounded-lg border overflow-hidden p-4 flex flex-col">
    <h1 className="text-xl font-bold text-gray-900">{{ news.title }}</h1>

    <p className="mt-2 text-gray-700">{{ news.description }}</p>

    <div className="mt-4 text-sm text-gray-500">
      By: <span className="font-semibold">{{ news.author ? news.author : 'Unknown Author' }}</span>
    </div>

    <div className="mt-2 text-sm text-gray-500">
      Published on:
      <span className="font-semibold">{{
        news.publishedAt ? new Date(news.publishedAt).toLocaleDateString() : ''
      }}</span>
    </div>

    <div className="mt-2 text-sm text-gray-500">
      Source: <span className="font-semibold">{{ news?.source?.name }}</span>
    </div>

    <div class="flex-1" />

    <div className="mt-4">
      <a
        :href="news?.url"
        className="text-red-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </a>
    </div>
  </div>
</template>
