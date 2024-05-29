<script setup lang="ts">
import type {News} from '@/types';
import type {PropType} from 'vue';

import NewsItem from './NewsItem.vue';
import NewsNoData from './NewsNoData.vue';
import NewsSkeleton from './NewsSkeleton.vue';

defineProps({
  data: {
    type: Array as PropType<News[]>,
    required: true,
  },
  loading: Boolean,
  errMsg: String,
});
</script>

<template>
  <main
    :class="{
      'w-full h-full flex flex-col items-center p-4 gap-10 overflow-y-auto': true,
      'justify-start': loading || data.length > 0,
      'justify-center': !loading && !data.length,
    }"
  >
    <template v-if="loading">
      <NewsSkeleton />
    </template>

    <template v-else-if="data.length === 0">
      <NewsNoData :err-msg="errMsg" />
    </template>

    <template v-else>
      <div class="w-full grid gap-4 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
        <template v-for="item in data" :key="item.url">
          <NewsItem :news="item" />
        </template>
      </div>
    </template>
  </main>
</template>
