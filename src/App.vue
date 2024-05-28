<script setup lang="ts">
import {ref} from 'vue';

import BrandName from '@/components/BrandName.vue';
import IconMoon from '@/components/icons/IconMoon.vue';
import IconSun from '@/components/icons/IconSun.vue';
import {THEME_KEY} from './config';
import type {Theme} from './types';

function setTheme(theme: Theme) {
  localStorage.setItem(THEME_KEY, theme);
  currentTheme.value = theme;

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function getStorageTheme(): Theme {
  return localStorage.getItem(THEME_KEY) as Theme;
}

function getMediaPreference(): Theme {
  const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (hasDarkPreference) {
    return 'dark';
  } else {
    return 'light';
  }
}

function toggleTheme() {
  if (currentTheme.value === 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

const currentTheme = ref<Theme>(getStorageTheme() ?? getMediaPreference());
const isNavBarOpen = ref(false);
</script>

<template>
  <div className="h-screen bg-white dark:bg-slate-900 text-slate-400 antialiased relative">
    <div v-if="!isNavBarOpen">
      <div
        className="sticky top-0 z-40 py-4 px-8 border-b border-slate-900/10 dark:border-slate-300/10 flex justify-between items-center"
      >
        <BrandName />

        <div className="flex gap-5">
          <button
            className="w-5 h-5 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
            @click="toggleTheme"
          >
            <template v-if="currentTheme === 'light'">
              <IconSun />
            </template>
            <template v-else>
              <IconMoon />
            </template>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
