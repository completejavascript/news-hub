<script setup lang="ts">
const props = defineProps({
  count: {
    type: Number,
    default: 12,
  },
});

const arr = Array.from({length: props.count}, (_, i) => i);
</script>

<template>
  <div class="w-full flex flex-col">
    <template v-for="a in arr" :key="a">
      <div
        :class="{
          'py-1.5 px-4 border-l pl-4 -ml-px cursor-pointer': true,
          'border-slate-900/10 dark:border-slate-300/10': true,
          'hover:border-slate-400 dark:hover:border-slate-500': true,
          'text-slate-500 hover:text-slate-700 dark:hover:text-slate-400': true,
        }"
      >
        <div class="animate-pulse bg-slate-200 dark:bg-slate-700 rounded-lg h-[36px]" />
      </div>
    </template>
  </div>
</template>
