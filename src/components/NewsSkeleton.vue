<script setup lang="ts">
const props = defineProps({
  count: {
    type: Number,
    default: 10,
  },
});

const arr = Array.from({length: props.count}, (_, i) => i);
</script>

<template>
  <div class="w-full grid gap-4 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
    <template v-for="a in arr" :key="a">
      <div className="animate-pulse bg-slate-200 dark:bg-slate-700 rounded-lg h-[360px]" />
    </template>
  </div>
</template>
