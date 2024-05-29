import {defineStore} from 'pinia';
import {ref} from 'vue';

import axiosInstance from '@/axiosInstance';
import type {Source} from '@/types';

export const useNewsStore = defineStore('news', () => {
  const sources = ref<Source[] | null>(null);
  const loading = ref(false);

  function fetchSources() {
    if (sources.value) return;

    loading.value = true;
    axiosInstance
      .get('top-headlines/sources')
      .then((res) => {
        sources.value = res.data.sources ?? [];
      })
      .catch((err) => {
        console.log({err});
        sources.value = [];
      })
      .finally(() => {
        loading.value = false;
      });
  }

  fetchSources();

  return {
    sources,
    loading,
  };
});
