<script setup lang="ts">
import {ref} from 'vue';
import {RouterLink} from 'vue-router';

import type {Route} from '@/types';

const categories = ref<Route[]>([
  {href: '/category/business', label: 'Business'},
  {href: '/category/entertainment', label: 'Entertainment'},
  {href: '/category/general', label: 'General'},
  {href: '/category/health', label: 'Health'},
  {href: '/category/science', label: 'Science'},
  {href: '/category/sports', label: 'Sports'},
  {href: '/category/technology', label: 'Technology'},
]);
</script>

<template>
  <div
    :class="{
      'h-full relative overflow-y-auto px-8': true,
      'border-r border-slate-900/10 dark:border-slate-300/10': true,
    }"
  >
    <div class="text-xl font-medium mt-6 mb-3 text-slate-700 dark:text-slate-400">Categories</div>
    <nav class="flex flex-col text-slate-400">
      <template v-for="category in categories" :key="category.href">
        <RouterLink
          :to="category.href"
          :class="{
            'py-1.5 px-4 border-l pl-4 -ml-px cursor-pointer': true,
            'border-slate-900/10 dark:border-slate-300/10': true,
            'hover:border-slate-400 dark:hover:border-slate-500': true,
            'hover:text-slate-700 dark:hover:text-slate-400': true,
          }"
          active-class="text-slate-900 dark:text-slate-100 hover:text-slate-500 dark:hover:text-slate-300"
        >
          {{ category.label }}
        </RouterLink>
      </template>
    </nav>
  </div>
</template>
