<script setup lang="ts">
import type { PropType } from 'vue';
import { RouterLink } from 'vue-router';

import type { News } from '@/types';

defineProps({
  news: {
    type: Object as PropType<News>,
    required: true,
  },
});
</script>

<template>
  <div :class="{
    'max-w-xl mx-auto bg-white rounded-lg border overflow-hidden p-4 flex flex-col': true,
    'dark:bg-slate-800  dark:border-slate-700': true,
  }">
    <a :href="news?.url" target="_blank" rel="noopener noreferrer"
      class="text-xl font-semibold text-slate-700 dark:text-slate-100 hover:text-slate-900 dark:hover:text-slate-200">
      <h1>{{ news.title }}</h1>
    </a>

    <p class="mt-2 text-slate-700 dark:text-slate-300">{{ news.description }}</p>

    <div class="mt-4 text-sm text-slate-500 dark:text-slate-400">
      By: <span class="font-semibold">{{ news.author ? news.author : 'Unknown Author' }}</span>
    </div>

    <div class="mt-2 text-sm text-slate-500 dark:text-slate-400">
      Published on:
      <span class="font-semibold">{{
        news.publishedAt ? new Date(news.publishedAt).toLocaleDateString() : ''
      }}</span>
    </div>

    <div class="mt-2 text-sm text-slate-500 dark:text-slate-400">
      Source:
      <RouterLink :to="`/source/${news?.source?.id}`"
        class="font-semibold hover:text-slate-700 dark:hover:text-slate-300">
        <span>{{ news?.source?.name }}</span>
      </RouterLink>
    </div>

    <div class="flex-1" />

    <div class="mt-4">
      <a :href="news?.url" class="text-link" target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  </div>
</template>
