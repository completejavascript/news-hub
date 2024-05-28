<script setup lang="ts">
import {RouterView} from 'vue-router';

import NewsNav from '@/components/NewsNav.vue';
</script>

<template>
  <div className="h-full w-full flex absolute top-0 pt-16">
    <div class="hidden md:block md:w-80">
      <NewsNav />
    </div>
    <div className="flex-1">
      <RouterView />
    </div>
  </div>
</template>
