import {defineStore} from 'pinia';
import {ref} from 'vue';

import axiosInstance from '@/axiosInstance';
import {API_KEY, NEWS_API} from '@/config';
import type {Source} from '@/types';

export const useNewsStore = defineStore('news', () => {
  const sources = ref<Source[] | null>(null);
  const loading = ref(false);

  function fetchSources(forceUpdate: boolean = false) {
    if (sources.value && !forceUpdate) return;

    const url = `${NEWS_API}/top-headlines/sources?apiKey=${API_KEY}`;
    loading.value = true;
    axiosInstance
      .get(`/?url=${encodeURIComponent(url)}`)
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
