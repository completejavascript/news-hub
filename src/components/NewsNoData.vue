<script setup lang="ts">
defineProps({
  errMsg: String,
});
</script>

<template>
  <img src="@/assets/illustration_no_data.svg" class="w-full max-w-[400px]" />
  <div class="text-slate-600 dark:text-slate-400 text-center">No data</div>
  <div class="text-red-500 text-center max-w-screen-sm italic">{{ errMsg }}</div>
</template>
