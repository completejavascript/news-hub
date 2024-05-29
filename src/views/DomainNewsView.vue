<script setup lang="ts">
import {ref, watch} from 'vue';
import {useRoute} from 'vue-router';

import axiosInstance from '@/axiosInstance';
import NewsGrid from '@/components/NewsGrid.vue';

const route = useRoute();
const domain = ref<string>(route.params.domain as string);
const data = ref([]);
const loading = ref(false);

function fetchData() {
  loading.value = true;
  axiosInstance
    .get('everything', {
      params: {domains: domain.value},
    })
    .then((res) => {
      data.value = res.data.articles ?? [];
    })
    .catch((err) => {
      console.log({err});
      data.value = [];
    })
    .finally(() => {
      loading.value = false;
    });
}

watch(route, (newRoute) => {
  domain.value = newRoute.params.domain as string;
  fetchData();
});

fetchData();
</script>

<template>
  <NewsGrid :data="data" :loading="loading" />
</template>
