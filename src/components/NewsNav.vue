<script setup lang="ts">
import {ref} from 'vue';
import {RouterLink} from 'vue-router';

import type {Category} from '@/types';

const emit = defineEmits(['onClick']);

function handleClick() {
  emit('onClick');
}

const categories = ref<{value: Category; label: string}[]>([
  {value: 'business', label: 'Business'},
  {value: 'entertainment', label: 'Entertainment'},
  {value: 'general', label: 'General'},
  {value: 'health', label: 'Health'},
  {value: 'science', label: 'Science'},
  {value: 'sports', label: 'Sports'},
  {value: 'technology', label: 'Technology'},
]);

const defaultDomains = ref<string[]>([
  'techcrunch.com',
  'bbc.co.uk',
  'thenextweb.com',
  'cnn.com',
  'apnews.com',
  'cbsnews.com',
  'foxnews.com',
  'bloomberg.com',
  'bleacherreport.com',
  'businessinsider.com',
  'buzzfeed.com',
  'espn.com',
  'financialpost.com',
]);

const domains = ref(defaultDomains);
</script>

<template>
  <div
    :class="{
      'h-full relative overflow-y-auto px-8': true,
      'border-r border-slate-900/10 dark:border-slate-300/10': true,
    }"
  >
    <nav class="flex flex-col text-slate-400">
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

      <div class="text-xl font-medium mt-6 mb-3 text-slate-800 dark:text-slate-300">Domains</div>
      <template v-for="domain in domains" :key="domain">
        <RouterLink
          :to="`/domain/${domain}`"
          :class="{
            'py-1.5 px-4 border-l pl-4 -ml-px cursor-pointer': true,
            'border-slate-900/10 dark:border-slate-300/10': true,
            'hover:border-slate-400 dark:hover:border-slate-500': true,
            'text-slate-500 hover:text-slate-700 dark:hover:text-slate-400': true,
          }"
          @click="handleClick"
        >
          {{ domain }}
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
