<script setup lang="ts">
import {RouterLink} from 'vue-router';
</script>

<template>
  <RouterLink to="/">
    <div class="flex gap-4 items-center">
      <img src="@/assets/logo.svg" alt="" width="32" height="32" />
      <h2 class="hidden md:block text-xl text-slate-900 dark:text-slate-100 font-semibold">
        News Hub
      </h2>
    </div>
  </RouterLink>
</template>
