<script setup lang="ts">
import {storeToRefs} from 'pinia';
import {ref} from 'vue';
import {RouterLink} from 'vue-router';

import {useNewsStore} from '@/stores/news';
import type {Category} from '@/types';
import SourcesSkeleton from '@/components/SourcesSkeleton.vue';

const emit = defineEmits(['onClick']);
function handleClick() {
  emit('onClick');
}

const newsStore = useNewsStore();
const {sources, loading: loadingSource} = storeToRefs(newsStore);

const categories = ref<{value: Category; label: string}[]>([
  {value: 'business', label: 'Business'},
  {value: 'entertainment', label: 'Entertainment'},
  {value: 'general', label: 'General'},
  {value: 'health', label: 'Health'},
  {value: 'science', label: 'Science'},
  {value: 'sports', label: 'Sports'},
  {value: 'technology', label: 'Technology'},
]);
</script>

<template>
  <div
    :class="{
      'h-full relative overflow-y-auto px-8': true,
      'border-r border-slate-900/10 dark:border-slate-300/10': true,
    }"
  >
    <nav class="flex flex-col text-slate-400 pb-4">
      <div class="text-xl font-medium mt-6 mb-3 text-slate-800 dark:text-slate-300">Categories</div>
      <template v-for="category in categories" :key="category.value">
        <RouterLink
          :to="`/category/${category.value}`"
          :class="{
            'py-1.5 px-4 border-l pl-4 -ml-px cursor-pointer': true,
            'border-slate-900/10 dark:border-slate-300/10': true,
            'hover:border-slate-400 dark:hover:border-slate-500': true,
            'text-slate-500 hover:text-slate-700 dark:hover:text-slate-400': true,
          }"
          @click="handleClick"
        >
          {{ category.label }}
        </RouterLink>
      </template>

      <div class="text-xl font-medium mt-6 mb-3 text-slate-800 dark:text-slate-300">Sources</div>
      <template v-if="loadingSource">
        <SourcesSkeleton />
      </template>
      <template v-else v-for="source in sources" :key="source.id">
        <RouterLink
          :to="`/source/${source.id}`"
          :class="{
            'py-1.5 px-4 border-l pl-4 -ml-px cursor-pointer': true,
            'border-slate-900/10 dark:border-slate-300/10': true,
            'hover:border-slate-400 dark:hover:border-slate-500': true,
            'text-slate-500 hover:text-slate-700 dark:hover:text-slate-400': true,
          }"
          @click="handleClick"
        >
          {{ source.name }}
        </RouterLink>
      </template>
    </nav>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply text-slate-900 dark:text-slate-100 hover:text-slate-500 dark:hover:text-slate-300;
}
</style>
