import {defineStore} from 'pinia';
import {ref} from 'vue';

import {THEME_KEY} from '@/config';
import type {Theme} from '@/types';

export const useThemeStore = defineStore('theme', () => {
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

  return {
    currentTheme,
    toggleTheme,
  };
});
