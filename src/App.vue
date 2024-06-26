<script setup lang="ts">
import {storeToRefs} from 'pinia';
import {ref} from 'vue';
import {RouterView} from 'vue-router';

import BrandName from '@/components/BrandName.vue';
import GithubLink from '@/components/GithubLink.vue';
import HeaderNav from '@/components/HeaderNav.vue';
import MenuButton from '@/components/MenuButton.vue';
import NewsNav from '@/components/NewsNav.vue';
import IconClose from '@/components/icons/IconClose.vue';
import IconMenu from '@/components/icons/IconMenu.vue';
import IconMoon from '@/components/icons/IconMoon.vue';
import IconSun from '@/components/icons/IconSun.vue';
import {useThemeStore} from '@/stores/theme';

const themeStore = useThemeStore();
const {currentTheme} = storeToRefs(themeStore);
const {toggleTheme} = themeStore;
const isNavBarOpen = ref(false);
</script>

<template>
  <div class="h-screen bg-white dark:bg-slate-900 text-slate-400 antialiased relative">
    <div v-if="!isNavBarOpen">
      <div
        :class="{
          'sticky top-0 z-40 py-4 px-8 flex justify-between items-center': true,
          'border-b border-slate-900/10 dark:border-slate-300/10': true,
        }"
      >
        <div class="flex gap-10 items-center">
          <BrandName />
          <HeaderNav />
        </div>

        <div class="flex gap-5 items-center">
          <button
            class="w-5 h-5 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
            @click="toggleTheme"
          >
            <template v-if="currentTheme === 'light'">
              <IconSun />
            </template>
            <template v-else>
              <IconMoon />
            </template>
          </button>

          <GithubLink />

          <MenuButton :is-hidden-md="true" @on-click="isNavBarOpen = true">
            <IconMenu />
          </MenuButton>
        </div>
      </div>

      <div class="h-full w-full flex absolute top-0 pt-16">
        <RouterView />
      </div>
    </div>
  </div>

  <div
    :class="{
      'translate-x-0': isNavBarOpen,
      '-translate-x-full': !isNavBarOpen,
      'fixed z-50 top-0 left-0 w-full h-full bg-white dark:bg-slate-900': true,
      'transform ease-in-out transition-all duration-300': true,
    }"
  >
    <div className="absolute h-full w-full top-0 pt-16">
      <NewsNav @on-click="isNavBarOpen = false" />
    </div>

    <div className="absolute w-full flex items-center py-4 px-8 top-0">
      <div className="flex-1">
        <BrandName />
      </div>

      <MenuButton @on-click="isNavBarOpen = false">
        <IconClose />
      </MenuButton>
    </div>
  </div>
</template>
