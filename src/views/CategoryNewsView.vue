<script setup lang="ts">
import {ref, watch} from 'vue';
import {useRoute} from 'vue-router';

import axiosInstance from '@/axiosInstance';
import NewsGrid from '@/components/NewsGrid.vue';

const route = useRoute();
const category = ref<string>(route.params.category as string);
const data = ref([]);
const error = ref('');
const loading = ref(false);

function fetchData() {
  loading.value = true;
  axiosInstance
    .get(`top-headlines?category=${category.value}`)
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
  category.value = newRoute.params.category as string;
  fetchData();
});

fetchData();
</script>

<template>
  <NewsGrid :data="data" :loading="loading" :errMsg="error" />
</template>
