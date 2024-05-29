<script setup lang="ts">
import {ref} from 'vue';
import {RouterLink} from 'vue-router';

import type {Route} from '@/types';

const routes = ref<Route[]>([
  {href: '/', label: 'Home'},
  {href: '/about', label: 'About'},
]);
</script>

<template>
  <nav class="flex gap-5">
    <template v-for="route in routes" :key="route.href">
      <RouterLink
        :to="route.href"
        class="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
        >{{ route.label }}</RouterLink
      >
    </template>
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply text-slate-900 dark:text-slate-100 hover:text-slate-500 dark:hover:text-slate-500;
}
</style>
