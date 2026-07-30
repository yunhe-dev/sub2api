<template>
  <header class="relative z-20 px-6 py-3">
    <nav class="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border border-[#eedbc9]/80 bg-[#fff8ef]/90 px-4 py-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#1a1311]/60 dark:shadow-none">
      <router-link to="/home" class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-[#1a1311] shadow-lg dark:border-white/10 dark:bg-white/10">
          <img :src="siteLogo || '/logo.png'" alt="Logo" class="h-full w-full object-contain" />
        </div>
        <div>
          <p class="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            {{ t('home.nav.badge') }}
          </p>
          <p class="text-base font-semibold text-slate-950 dark:text-white">{{ siteName }}</p>
        </div>
      </router-link>

      <nav class="hidden items-center gap-6 lg:flex">
        <router-link
          to="/home"
          class="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
        >
          <Icon name="home" size="sm" />
          {{ t('home.nav.home') }}
        </router-link>
        <a
          href="https://docs.smew.ai"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
        >
          <Icon name="book" size="sm" />
          {{ t('home.nav.docs') }}
        </a>
        <router-link
          to="/available-channels"
          class="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
        >
          <Icon name="cube" size="sm" />
          {{ t('home.nav.models') }}
        </router-link>
        <a
          :href="pricingHref"
          class="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
        >
          <Icon name="dollar" size="sm" />
          {{ t('home.nav.pricing') }}
        </a>
        <a
          :href="faqHref"
          class="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
        >
          <Icon name="questionCircle" size="sm" />
          {{ t('home.nav.faq') }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <LocaleSwitcher />
        <button
          @click="toggleTheme"
          class="rounded-xl border border-[#eedbc9]/80 bg-white/80 p-2.5 text-slate-500 transition-colors hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
          :title="isDark ? t('home.switchToLight') : t('home.switchToDark')"
        >
          <Icon v-if="isDark" name="sun" size="md" />
          <Icon v-else name="moon" size="md" />
        </button>
        <router-link
          v-if="isAuthenticated"
          :to="dashboardPath"
          class="inline-flex items-center gap-2 rounded-xl bg-[#1a1311] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#2b1f1c] dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
        >
          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff9c66] text-[11px] font-bold text-slate-950">
            {{ userInitial }}
          </span>
          {{ t('home.dashboard') }}
        </router-link>
        <router-link
          v-else
          to="/login"
          class="inline-flex items-center gap-2 rounded-xl bg-[#1a1311] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#2b1f1c] dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
        >
          {{ t('home.login') }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAuthStore, useAppStore } from '@/stores'
import LocaleSwitcher from '@/components/common/LocaleSwitcher.vue'
import Icon from '@/components/icons/Icon.vue'

const { t } = useI18n()
const route = useRoute()
const authStore = useAuthStore()
const appStore = useAppStore()

const siteName = computed(() => appStore.cachedPublicSettings?.site_name || appStore.siteName || 'Smew.ai')
const siteLogo = computed(() => appStore.cachedPublicSettings?.site_logo || appStore.siteLogo || '')
const isDark = ref(document.documentElement.classList.contains('dark'))
const isAuthenticated = computed(() => authStore.isAuthenticated)
const isAdmin = computed(() => authStore.isAdmin)
const dashboardPath = computed(() => (isAdmin.value ? '/admin/dashboard' : '/dashboard'))
const userInitial = computed(() => authStore.user?.email?.charAt(0).toUpperCase() || 'S')

const pricingHref = computed(() => (route.path === '/home' ? '#pricing' : '/home#pricing'))
const faqHref = computed(() => (route.path === '/home' ? '#faq' : '/home#faq'))

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme')
  if (
    savedTheme === 'dark' ||
    (!savedTheme && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
}

onMounted(() => {
  initTheme()
})
</script>
