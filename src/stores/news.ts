import { defineStore } from 'pinia';
import { ref } from 'vue';

import axiosInstance from '@/axiosInstance';
import type { Source } from '@/types';
import { getUrl } from '@/utils';

export const useNewsStore = defineStore('news', () => {
  const sources = ref<Source[] | null>(null);
  const loading = ref(false);

  function fetchSources(forceUpdate: boolean = false) {
    if (sources.value && !forceUpdate) return;

    loading.value = true;
    axiosInstance
      .get(getUrl('top-headlines/sources'))
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
    fetchSources,
  };
});
