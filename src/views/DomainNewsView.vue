<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import axiosInstance from '@/axiosInstance';
import NewsGrid from '@/components/NewsGrid.vue';
import { getUrl } from '@/utils';

const route = useRoute();
const domain = ref<string>(route.params.domain as string);
const data = ref([]);
const loading = ref(false);
const error = ref('');

function fetchData() {
  loading.value = true;
  axiosInstance
    .get(getUrl(`everything?domains=${domain.value}`))
    .then((res: any) => {
      data.value = res.data.articles ?? [];
    })
    .catch((err: any) => {
      console.log({ err });
      data.value = [];
      error.value = err.message;
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
  <NewsGrid :data="data" :loading="loading" :errMsg="error" />
</template>
