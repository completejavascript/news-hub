<script setup lang="ts">
defineProps({
  isHiddenMd: Boolean,
});

const emit = defineEmits(['onClick']);

function handleClick() {
  emit('onClick');
}
</script>

<template>
  <button
    class="block md:hidden w-5 h-5 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
    :class="{
      'block w-5 h-5 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300': true,
      'md:hidden': isHiddenMd,
    }"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
