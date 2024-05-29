<script setup lang="ts">
import {ref, watch} from 'vue';
import {useRoute} from 'vue-router';

import axiosInstance from '@/axiosInstance';
import NewsGrid from '@/components/NewsGrid.vue';
import {API_KEY, NEWS_API} from '@/config';

const route = useRoute();
const source = ref<string>(route.params.source as string);
const data = ref([]);
const loading = ref(false);
const error = ref('');

function fetchData() {
  const url = `${NEWS_API}/top-headlines?apiKey=${API_KEY}&sources=${source.value}`;
  loading.value = true;
  axiosInstance
    .get(`/?url=${encodeURIComponent(url)}`)
    .then((res) => {
      data.value = res.data.articles ?? [];
    })
    .catch((err) => {
      console.log({err});
      data.value = [];
      error.value = err.message;
    })
    .finally(() => {
      loading.value = false;
    });
}

watch(route, (newRoute) => {
  source.value = newRoute.params.source as string;
  fetchData();
});

fetchData();
</script>

<template>
  <NewsGrid :data="data" :loading="loading" :errMsg="error" />
</template>
