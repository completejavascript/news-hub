<script setup lang="ts">
import {ref, watch} from 'vue';
import {useRoute} from 'vue-router';

import axiosInstance from '@/axiosInstance';
import NewsSkeleton from '@/components/NewsSkeleton.vue';
import NewsItem from '@/components/NewsItem.vue';
import NewsNoData from '@/components/NewsNoData.vue';

const route = useRoute();
const category = ref<string>(route.params.category as string);
const data = ref([]);
const loading = ref(false);

function fetchData() {
  loading.value = true;
  axiosInstance
    .get('top-headlines', {
      params: {category: category.value},
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
  category.value = newRoute.params.category as string;
  fetchData();
});

fetchData();
</script>

<template>
  <main
    :class="{
      'w-full h-full flex flex-col items-center p-4 gap-10 overflow-y-auto': true,
      'justify-start': loading || data.length > 0,
      'justify-center': !loading && !data.length,
    }"
  >
    <template v-if="loading">
      <NewsSkeleton />
    </template>

    <template v-else-if="data.length === 0">
      <NewsNoData />
    </template>

    <template v-else>
      <div class="w-full grid gap-4 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
        <template v-for="item in data" :key="item.url">
          <NewsItem :news="item" />
        </template>
      </div>
    </template>
  </main>
</template>
