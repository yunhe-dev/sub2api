<template>
  <div v-if="homeContent" class="min-h-screen">
    <iframe
      v-if="isHomeContentUrl"
      :src="homeContent.trim()"
      class="h-screen w-full border-0"
      allowfullscreen
    ></iframe>
    <div v-else v-html="homeContent"></div>
  </div>

  <div
    v-else
    class="relative min-h-screen overflow-hidden bg-[#f8f2e8] text-slate-900 dark:bg-[#130d0f] dark:text-white"
  >
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_top,rgba(229,93,43,0.18),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,130,76,0.16),transparent_55%)]"></div>
      <div class="absolute right-[-12rem] top-24 h-[28rem] w-[28rem] rounded-full bg-[#ffb085]/35 blur-3xl dark:bg-[#8a3322]/35"></div>
      <div class="absolute left-[-8rem] top-[28rem] h-[24rem] w-[24rem] rounded-full bg-[#ffe1bf]/85 blur-3xl dark:bg-[#4a1f17]/55"></div>
      <div class="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:44px_44px] dark:bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)]"></div>
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,242,232,0)_0%,rgba(248,242,232,0.92)_78%,#f8f2e8_100%)] dark:bg-[linear-gradient(180deg,rgba(19,13,15,0)_0%,rgba(19,13,15,0.92)_72%,#130d0f_100%)]"></div>
    </div>

    <SiteHeader />

    <main class="relative z-10 px-6 pb-16 pt-6 sm:pb-24 sm:pt-8">
      <section class="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center">
        <div class="grid w-full gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(420px,0.9fr)] lg:items-center">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 rounded-full border border-[#f3c7aa] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b6542e] shadow-sm dark:border-[#ff9c66]/20 dark:bg-[#ff9c66]/10 dark:text-[#ffd8bf]">
            <Icon name="sparkles" size="sm" />
            {{ t('home.hero.eyebrow') }}
          </div>

          <h1 class="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
            {{ t('home.hero.titleLead') }}
            <span class="block bg-[linear-gradient(135deg,#1a1311_5%,#c4512d_55%,#ff9c66_100%)] bg-clip-text text-transparent dark:bg-[linear-gradient(135deg,#ffffff_5%,#ffb181_58%,#ffd6ad_100%)]">
              {{ t('home.hero.titleAccent') }}
            </span>
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {{ heroDescription }}
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <router-link
              :to="isAuthenticated ? dashboardPath : '/login'"
              class="inline-flex items-center gap-2 rounded-full bg-[#1a1311] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(59,30,20,0.18)] transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
            >
              {{ isAuthenticated ? t('home.goToDashboard') : t('home.getStarted') }}
              <Icon name="arrowRight" size="sm" />
            </router-link>
            <a
              href="https://docs.smew.ai"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-full border border-[#eedbc9] bg-white/85 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
            >
              {{ t('home.hero.secondaryCta') }}
              <Icon name="externalLink" size="sm" />
            </a>
            <router-link
              to="/available-channels"
              class="inline-flex items-center gap-2 rounded-full border border-[#eedbc9] bg-white/85 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
            >
              {{ t('home.nav.models') }}
              <Icon name="cube" size="sm" />
            </router-link>
          </div>

          <div class="mt-8 flex flex-wrap gap-3">
            <div
              v-for="tag in tags"
              :key="tag"
              class="rounded-full border border-[#eedbc9] bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            >
              {{ tag }}
            </div>
          </div>

          <div class="mt-10 grid gap-4 sm:grid-cols-3">
            <div
              v-for="item in stats"
              :key="item.value"
              class="rounded-3xl border border-white/70 bg-white/75 p-5 shadow-[0_20px_60px_rgba(59,30,20,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
            >
              <div class="text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">{{ item.value }}</div>
              <div class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ item.label }}</div>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="absolute -left-10 top-10 hidden h-28 w-28 rounded-full bg-[#ffd0a8]/70 blur-3xl lg:block dark:bg-[#70291e]/45"></div>
          <div class="relative overflow-hidden rounded-[32px] border border-[#edd3bc] bg-[#fff8ef]/95 p-5 shadow-[0_32px_100px_rgba(59,30,20,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-[#1b1214]/90 dark:shadow-[0_32px_100px_rgba(0,0,0,0.4)]">
            <div class="rounded-[28px] border border-[#eedbc9] bg-white/85 p-5 dark:border-white/10 dark:bg-white/5">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[#b6542e] dark:text-[#ffbf96]">
                    {{ t('home.preview.badge') }}
                  </p>
                  <p class="mt-2 text-xl font-semibold text-slate-950 dark:text-white">
                    {{ t('home.preview.title') }}
                  </p>
                  <p class="mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {{ t('home.preview.configDescription') }}
                  </p>
                </div>
                <span class="rounded-full bg-[#ffe5d1] px-3 py-1 text-[11px] font-semibold text-[#b6542e] dark:bg-[#ff9c66]/10 dark:text-[#ffcfb0]">
                  {{ t('home.preview.panelStatus') }}
                </span>
              </div>
            </div>

            <div class="mt-4 grid gap-3 sm:grid-cols-2">
              <div
                v-for="item in heroFeatureCards"
                :key="item.title"
                class="rounded-3xl border border-[#eedbc9] bg-white/90 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <div class="flex items-start gap-3">
                  <div class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#1a1311] text-white dark:bg-[#ff9c66] dark:text-slate-950">
                    <Icon :name="item.icon" size="md" />
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-slate-950 dark:text-white">{{ item.title }}</p>
                    <p class="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section id="how" class="mx-auto mt-20 max-w-7xl">
        <div class="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_20px_60px_rgba(59,30,20,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[#b6542e] dark:text-[#ffbf96]">
                {{ t('home.positioning.badge') }}
              </p>
              <h2 class="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                {{ t('home.positioning.title') }}
              </h2>
              <p class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                {{ t('home.positioning.description') }}
              </p>
            </div>
            <div class="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <div
                v-for="(h, i) in positioningHighlights"
                :key="i"
                class="flex items-center gap-3 rounded-2xl border border-[#eedbc9] bg-[#fff9f3]/80 px-4 py-3 dark:border-white/10 dark:bg-slate-950/40"
              >
                <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#1a1311] text-white dark:bg-[#ff9c66] dark:text-slate-950">
                  <Icon :name="h.icon" size="sm" />
                </div>
                <span class="text-sm font-medium text-slate-700 dark:text-slate-200">{{ h.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" class="mx-auto mt-20 max-w-7xl">
        <div class="rounded-[36px] border border-[#eedbc9] bg-[linear-gradient(135deg,#fff8ef_0%,#ffeeda_48%,#fff5ea_100%)] p-8 shadow-[0_20px_60px_rgba(59,30,20,0.1)] dark:border-white/10 dark:bg-[linear-gradient(135deg,#1a1311_0%,#231518_50%,#2b1813_100%)]">
          <div class="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[#b6542e] dark:text-[#ffbf96]">
                {{ t('home.comparisonV2.badge') }}
              </p>
              <h2 class="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                {{ t('home.comparisonV2.title') }}
              </h2>
              <p class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                {{ t('home.comparisonV2.description') }}
              </p>
              <div class="mt-8 flex flex-wrap gap-3">
                <span
                  v-for="provider in providers"
                  :key="provider"
                  class="rounded-full border border-[#eedbc9] bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  {{ provider }}
                </span>
              </div>
            </div>

            <div class="overflow-hidden rounded-[28px] border border-white/80 bg-white/90 dark:border-white/10 dark:bg-slate-950/40">
              <div class="grid grid-cols-3 border-b border-slate-200 text-sm font-semibold dark:border-white/10">
                <div class="px-5 py-4 text-slate-500 dark:text-slate-400">{{ t('home.comparison.headers.feature') }}</div>
                <div class="border-l border-slate-200 px-5 py-4 text-slate-500 dark:border-white/10 dark:text-slate-400">{{ t('home.comparison.headers.official') }}</div>
                <div class="border-l border-slate-200 px-5 py-4 text-slate-950 dark:border-white/10 dark:text-white">{{ t('home.comparison.headers.us') }}</div>
              </div>
              <div
                v-for="row in comparisonRows"
                :key="row.feature"
                class="grid grid-cols-3 border-b border-slate-200/80 text-sm last:border-b-0 dark:border-white/10"
              >
                <div class="px-5 py-4 font-semibold text-slate-950 dark:text-white">{{ row.feature }}</div>
                <div class="border-l border-slate-200 px-5 py-4 text-slate-500 dark:border-white/10 dark:text-slate-400">{{ row.official }}</div>
                <div class="border-l border-slate-200 px-5 py-4 text-slate-700 dark:border-white/10 dark:text-slate-200">{{ row.us }}</div>
              </div>
            </div>
          </div>

          <div v-if="catalogEnabled || purchaseLoading" class="mt-12">
            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[#b6542e] dark:text-[#ffbf96]">
              {{ t('purchase.title') }}
            </p>
            <h3 class="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
              {{ t('purchase.heading') }}
            </h3>
            <p class="mt-2 text-base text-slate-600 dark:text-slate-300">
              {{ t('purchase.description') }}
            </p>

            <div v-if="purchaseLoading" class="mt-8 flex justify-center py-12">
              <div class="h-10 w-10 animate-spin rounded-full border-2 border-[#e55d2b] border-t-transparent" />
            </div>

            <div
              v-else-if="!catalogEnabled"
              class="mt-8 flex items-center justify-center rounded-2xl border border-[#eedbc9] bg-white/80 px-6 py-12 text-center dark:border-white/10 dark:bg-white/5"
            >
              <div class="max-w-md">
                <Icon name="creditCard" size="lg" class="mx-auto text-slate-400" />
                <h4 class="mt-4 text-lg font-semibold text-slate-950 dark:text-white">
                  {{ t('purchase.notEnabledTitle') }}
                </h4>
                <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {{ t('purchase.notEnabledDesc') }}
                </p>
              </div>
            </div>

            <template v-else>
              <div v-if="showPurchaseTabs" class="purchase-home-tabs mt-8">
                <button
                  type="button"
                  class="purchase-home-tab"
                  :class="{ 'purchase-home-tab-active': homeActiveTab === 'subscription' }"
                  @click="homeActiveTab = 'subscription'"
                >
                  订阅套餐
                </button>
                <button
                  v-if="paygoEnabled"
                  type="button"
                  class="purchase-home-tab"
                  :class="{ 'purchase-home-tab-active': homeActiveTab === 'paygo' }"
                  @click="homeActiveTab = 'paygo'"
                >
                  按量付费
                </button>
              </div>

              <div v-if="homeActiveTab === 'subscription'" class="purchase-home-grid mt-8">
                <article
                  v-for="product in purchaseProducts"
                  :key="product.group_id"
                  class="purchase-home-card"
                >
                  <div class="space-y-5">
                    <div class="space-y-2">
                      <div class="flex items-start justify-between gap-2">
                        <h4 class="purchase-home-card-title min-w-0 flex-1">{{ product.name }}</h4>
                        <span
                          v-if="product.marketing_label?.trim()"
                          class="purchase-home-marketing-pill shrink-0"
                        >{{ product.marketing_label.trim() }}</span>
                      </div>
                      <div class="flex items-end gap-3">
                        <span class="purchase-home-price">￥{{ formatPurchasePriceCNY(product.purchase_price_cny) }}</span>
                        <span class="purchase-home-period">{{ periodLabel(product.default_validity_days) }}</span>
                      </div>
                    </div>
                    <ul class="purchase-home-highlights">
                      <li
                        v-for="item in productHighlights(product)"
                        :key="`${product.group_id}-${item}`"
                        class="flex items-start gap-2.5"
                      >
                        <span class="purchase-home-highlight-dot" />
                        <span class="text-slate-700 dark:text-slate-300">{{ item }}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="purchase-home-actions">
                    <button
                      type="button"
                      class="purchase-home-btn purchase-home-btn-primary"
                      @click="openSubscriptionDialog(product)"
                    >
                      {{ t('purchase.dialog.openCta') }}
                    </button>
                  </div>
                </article>

              </div>

              <PayGoPanel
                v-else
                class="mt-8"
                :title="publicSettings?.paygo_title"
                :description="publicSettings?.paygo_description"
                :badge-text="publicSettings?.paygo_badge_text"
                :notice-title="publicSettings?.paygo_notice_title"
                :notice-description="publicSettings?.paygo_notice_description"
                :preset-packages="publicSettings?.paygo_preset_packages || []"
                :rate-rmb-to-usd="publicSettings?.paygo_rate_rmb_to_usd || 1"
                :min-amount-cny="publicSettings?.paygo_min_amount_cny || 100"
                :preset-amounts-cny="publicSettings?.paygo_preset_amounts_cny || [100, 300, 500, 1000]"
                :slider-min-amount-cny="publicSettings?.paygo_slider_min_amount_cny || publicSettings?.paygo_min_amount_cny || 100"
                :slider-max-amount-cny="publicSettings?.paygo_slider_max_amount_cny || 1000"
                :slider-step-amount-cny="publicSettings?.paygo_slider_step_amount_cny || 50"
                :token-per-usd-million="publicSettings?.paygo_token_per_usd_million || 1"
                :price-details-url="publicSettings?.paygo_price_details_url"
                :alipay-enabled="alipayEnabled"
                :wxpay-enabled="wxpayEnabled"
                :submitting-key="homePayGoSubmittingKey"
                @create-order="handlePayGoOrder"
              />

              <p v-if="subscriptionEnabled && purchaseProducts.length === 0 && homeActiveTab === 'subscription'" class="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
                {{ t('purchase.emptyProducts') }}
              </p>
            </template>

            <SubscriptionPurchaseDialog
              :show="subscriptionDialogOpen"
              :product="selectedProduct"
              :selected-method="selectedPaymentMethod"
              :use-points-deduction="usePointsDeduction"
              :alipay-enabled="alipayEnabled"
              :wxpay-enabled="wxpayEnabled"
              :submitting="subscriptionSubmitting"
              :current-points="authStore.user?.points_balance || 0"
              @close="closeSubscriptionDialog"
              @update:selected-method="selectedPaymentMethod = $event"
              @update:use-points-deduction="usePointsDeduction = $event"
              @submit="submitSubscriptionDialog"
            />
          </div>
        </div>
      </section>

      <section id="testimonials" class="mx-auto mt-20 max-w-7xl">
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[#b6542e] dark:text-[#ffbf96]">
          {{ t('home.testimonials.badge') }}
        </p>
        <h2 class="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
          {{ t('home.testimonials.title') }}
        </h2>
        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <div
            v-for="(item, index) in testimonials"
            :key="index"
            class="rounded-3xl border border-[#eedbc9] bg-white/90 p-6 shadow-[0_20px_60px_rgba(59,30,20,0.08)] dark:border-white/10 dark:bg-slate-950/40"
          >
            <p class="text-base leading-7 text-slate-600 dark:text-slate-300">&ldquo;{{ item.quote }}&rdquo;</p>
            <p class="mt-4 text-sm font-semibold text-slate-950 dark:text-white">{{ item.name }}</p>
            <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">{{ item.role }}</p>
          </div>
        </div>
      </section>

      <section id="faq" class="mx-auto mt-20 max-w-7xl">
        <div class="relative overflow-hidden rounded-[36px] border border-white/70 bg-white/60 px-6 py-8 shadow-[0_20px_60px_rgba(59,30,20,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:px-8 sm:py-10">
          <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)]"></div>
          <div class="relative">
            <div class="mx-auto max-w-3xl text-center">
              <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[#b6542e] dark:text-[#ffbf96]">
                {{ t('home.faq.badge') }}
              </p>
              <h2 class="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                {{ t('home.faq.title') }}
              </h2>
              <p class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                {{ t('home.faq.description') }}
              </p>
            </div>

            <div class="mt-8 space-y-5">
              <article
                v-for="item in faqItems"
                :key="item.question"
                class="rounded-[28px] border border-[#e9ddd0] bg-white/92 px-6 py-6 shadow-[0_18px_50px_rgba(59,30,20,0.06)] dark:border-white/10 dark:bg-slate-950/45"
              >
                <h3 class="text-2xl font-semibold tracking-[-0.03em] text-slate-950 dark:text-white">
                  {{ item.question }}
                </h3>
                <p class="mt-4 text-lg leading-9 text-slate-600 dark:text-slate-300">
                  {{ item.answer }}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="codex-install" class="mx-auto mt-20 max-w-7xl">
        <div class="rounded-[36px] border border-[#eedbc9] bg-white/90 p-8 shadow-[0_20px_60px_rgba(59,30,20,0.08)] dark:border-white/10 dark:bg-slate-950/40">
          <div class="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[#b6542e] dark:text-[#ffbf96]">
                {{ t('home.codexInstall.badge') }}
              </p>
              <h2 class="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                {{ t('home.codexInstall.title') }}
              </h2>
              <p class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                {{ t('home.codexInstall.description') }}
              </p>

              <div class="mt-6 flex flex-wrap gap-3">
                <a
                  :href="codexKeysUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 rounded-full border border-[#eedbc9] bg-[#fff8ef] px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
                >
                  {{ t('home.codexInstall.getKey') }}
                  <Icon name="key" size="sm" />
                </a>
                <a
                  :href="codexInstallerUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 rounded-full border border-[#eedbc9] bg-[#fff8ef] px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
                >
                  {{ t('home.codexInstall.viewScript') }}
                  <Icon name="externalLink" size="sm" />
                </a>
              </div>

              <div class="mt-8 space-y-3">
                <div
                  v-for="item in codexInstallHighlights"
                  :key="item.text"
                  class="flex items-center gap-3 rounded-2xl border border-[#eedbc9] bg-[#fff8ef]/80 px-4 py-3 dark:border-white/10 dark:bg-slate-950/40"
                >
                  <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#1a1311] text-white dark:bg-[#ff9c66] dark:text-slate-950">
                    <Icon :name="item.icon" size="sm" />
                  </div>
                  <span class="text-sm font-medium text-slate-700 dark:text-slate-200">{{ item.text }}</span>
                </div>
              </div>
            </div>

            <div class="space-y-5">
              <div class="overflow-hidden rounded-[28px] border border-[#eedbc9] bg-[#1a1311] shadow-[0_20px_50px_rgba(15,23,42,0.22)] dark:border-white/10">
                <div class="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div class="flex items-center gap-2 text-sm font-semibold text-white">
                    <Icon name="terminal" size="sm" />
                    <span>{{ t('home.codexInstall.macLabel') }}</span>
                  </div>
                </div>
                <div class="space-y-4 p-5">
                  <pre class="overflow-x-auto rounded-2xl bg-black/30 p-4 text-sm leading-6 text-[#ffd6ad]"><code>{{ codexInstallCommand }}</code></pre>
                  <p class="text-sm leading-6 text-slate-300">
                    {{ t('home.codexInstall.macDescription') }}
                  </p>
                </div>
              </div>

              <div class="rounded-[28px] border border-[#eedbc9] bg-[#fff8ef]/85 p-5 dark:border-white/10 dark:bg-white/5">
                <div class="flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white">
                  <Icon name="document" size="sm" />
                  <span>{{ t('home.codexInstall.manualLabel') }}</span>
                </div>
                <pre class="mt-4 overflow-x-auto rounded-2xl border border-[#eedbc9] bg-white/90 p-4 text-sm leading-6 text-slate-700 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-200"><code>{{ codexManualConfig }}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto mt-20 max-w-7xl">
        <div class="rounded-2xl border border-[#c5e0d8]/80 bg-white/90 px-8 py-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-slate-900/50 dark:shadow-none">
          <div class="flex flex-col items-center gap-6 text-center">
            <h2 class="text-2xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-white">
              {{ t('home.contact.title') }}
            </h2>
            <p class="max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
              {{ t('home.contact.subtitle') }}
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <div
                class="flex min-w-[200px] items-center justify-between gap-3 rounded-xl border border-[#eedbc9] bg-white px-5 py-3 text-left shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <div class="flex flex-col gap-0.5">
                  <span class="text-sm font-medium text-slate-700 dark:text-slate-200">{{ t('home.contact.wechatLabel') }}</span>
                  <span class="text-sm text-slate-500 dark:text-slate-400">{{ contactWechatId }}</span>
                </div>
                <Icon name="chat" size="sm" class="shrink-0 text-slate-400 dark:text-slate-500" />
              </div>
              <a
                :href="contactEmailHref"
                class="flex min-w-[200px] items-center justify-between gap-3 rounded-xl border border-[#eedbc9] bg-white px-5 py-3 text-left shadow-sm transition-colors hover:border-[#e5c7a8] hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <div class="flex flex-col gap-0.5">
                  <span class="text-sm font-medium text-slate-700 dark:text-slate-200">{{ t('home.contact.emailLabel') }}</span>
                  <span class="text-sm text-slate-500 dark:text-slate-400">{{ contactEmail }}</span>
                </div>
                <Icon name="mail" size="sm" class="shrink-0 text-slate-400 dark:text-slate-500" />
              </a>
              <a
                :href="contactXUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex min-w-[200px] items-center justify-between gap-3 rounded-xl border border-[#eedbc9] bg-white px-5 py-3 text-left shadow-sm transition-colors hover:border-[#e5c7a8] hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <div class="flex flex-col gap-0.5">
                  <span class="text-sm font-medium text-slate-700 dark:text-slate-200">{{ t('home.contact.xLabel') }}</span>
                  <span class="text-sm text-slate-500 dark:text-slate-400 break-all">{{ contactXUrl }}</span>
                </div>
                <Icon name="externalLink" size="sm" class="shrink-0 text-slate-400 dark:text-slate-500" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto mt-20 max-w-7xl">
        <div class="rounded-[36px] border border-[#3b241d] bg-[#1a1311] px-8 py-10 text-white shadow-[0_32px_100px_rgba(59,30,20,0.34)] dark:border-white/10">
          <div class="flex flex-col items-center gap-8 text-center">
            <div class="max-w-2xl">
              <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[#ffbf96]">
                {{ t('home.cta.badge') }}
              </p>
              <h2 class="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                {{ t('home.cta.title') }}
              </h2>
              <p class="mt-4 text-base leading-7 text-slate-300">
                {{ t('home.cta.description') }}
              </p>
            </div>
            <div class="flex flex-wrap justify-center gap-3">
              <router-link
                :to="isAuthenticated ? dashboardPath : '/register'"
                class="inline-flex items-center gap-2 rounded-full bg-[#ff9c66] px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
              >
                {{ t('home.cta.button') }}
                <Icon name="arrowRight" size="sm" />
              </router-link>
              <a
                href="https://docs.smew.ai"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white"
              >
                {{ t('home.docs') }}
                <Icon name="externalLink" size="sm" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>

    <footer class="relative z-10 px-6 pb-8 pt-4">
      <div class="mx-auto max-w-7xl border-t border-slate-200/80 pt-6 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
        <p>&copy; {{ currentYear }} {{ siteName }}. {{ t('home.footer.allRightsReserved') }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import purchaseAPI from '@/api/purchase'
import { useAuthStore, useAppStore } from '@/stores'
import type { PurchaseProduct } from '@/types'
import {
  formatPurchasePriceCNY,
  resolvePurchasePeriod,
  splitPurchaseHighlights
} from '@/utils/purchaseDisplay'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import Icon from '@/components/icons/Icon.vue'
import PayGoPanel from '@/components/purchase/PayGoPanel.vue'
import SubscriptionPurchaseDialog from '@/components/purchase/SubscriptionPurchaseDialog.vue'

const { t } = useI18n()
const router = useRouter()

const authStore = useAuthStore()
const appStore = useAppStore()

const defaultGatewayBaseUrl = 'https://smew.ai'
const siteName = computed(() => appStore.cachedPublicSettings?.site_name || appStore.siteName || 'Smew.ai')
const homeContent = computed(() => appStore.cachedPublicSettings?.home_content || '')
const heroDescription = computed(() => {
  const fallback = t('home.hero.description')
  const subtitle = appStore.cachedPublicSettings?.site_subtitle?.trim()
  const text = subtitle || fallback
  return text.replace(/（燃料）/, '（「燃料」）').replace(/\(燃料\)/, '（「燃料」）')
})

const isHomeContentUrl = computed(() => {
  const content = homeContent.value.trim()
  return content.startsWith('http://') || content.startsWith('https://')
})
const gatewayBaseUrl = computed(() => {
  const configured = appStore.cachedPublicSettings?.api_base_url?.trim() || appStore.apiBaseUrl?.trim()
  return configured ? configured.replace(/\/$/, '') : defaultGatewayBaseUrl
})
const codexInstallerUrl = computed(() => `${gatewayBaseUrl.value}/auto-config/install.sh`)
const codexKeysUrl = 'https://smew.ai/keys'
const codexInstallCommand = computed(() => `curl -fsSL ${codexInstallerUrl.value} | bash`)
const codexManualConfig = computed(() => `model_provider = "SmewAI"
model = "gpt-5.3-codex"
model_reasoning_effort = "medium"
model_context_window = 256000
model_max_output_tokens = 32768

[model_providers.SmewAI]
name = "SmewAI"
base_url = "${gatewayBaseUrl.value}/v1"
wire_api = "responses"
requires_openai_auth = true`)

const isAuthenticated = computed(() => authStore.isAuthenticated)
const isAdmin = computed(() => authStore.isAdmin)
const dashboardPath = computed(() => (isAdmin.value ? '/admin/dashboard' : '/dashboard'))
const currentYear = computed(() => new Date().getFullYear())

const contactWechatId = 'jiangztaoo'
const contactEmail = 'jiangzhengtao02@gmail.com'
const contactEmailHref = `mailto:${contactEmail}`
const contactXUrl = 'https://x.com/JiangK82705'
const purchaseProducts = ref<PurchaseProduct[]>([])
const purchaseLoading = ref(false)
const purchaseSubmittingKey = ref<string | null>(null)
const homeActiveTab = ref<'subscription' | 'paygo'>('subscription')
const subscriptionDialogOpen = ref(false)
const selectedProduct = ref<PurchaseProduct | null>(null)
const selectedPaymentMethod = ref<'alipay' | 'wxpay' | 'points' | null>(null)
const usePointsDeduction = ref(false)

const publicSettings = computed(() => appStore.cachedPublicSettings)
// The current Sub2API payment catalog is authenticated, while the SmewAI source
// project exposes its catalog publicly. Keep anonymous landing-page visits clean
// and enable purchase widgets only after the user has signed in.
const subscriptionEnabled = computed(() =>
  isAuthenticated.value && (publicSettings.value?.purchase_subscription_enabled ?? false)
)
const paygoEnabled = computed(() =>
  isAuthenticated.value && (publicSettings.value?.paygo_enabled ?? false)
)
const catalogEnabled = computed(() => subscriptionEnabled.value || paygoEnabled.value)
const showPurchaseTabs = computed(() => subscriptionEnabled.value && paygoEnabled.value)
const epayEnabled = computed(() => publicSettings.value?.epay_enabled ?? false)
const alipayEnabled = computed(() => epayEnabled.value && (publicSettings.value?.epay_alipay_enabled ?? false))
const wxpayEnabled = computed(() => epayEnabled.value && (publicSettings.value?.epay_wxpay_enabled ?? false))
const homePayGoSubmittingKey = computed(() => {
  if (
    purchaseSubmittingKey.value === 'paygo:alipay' ||
    purchaseSubmittingKey.value === 'paygo:wxpay'
  ) {
    return purchaseSubmittingKey.value
  }
  return null
})
const subscriptionSubmitting = computed(() => {
  if (!selectedProduct.value || !selectedPaymentMethod.value) return false
  return purchaseSubmittingKey.value === `subscription:${selectedPaymentMethod.value}:${selectedProduct.value.group_id}`
})
watch([subscriptionEnabled, paygoEnabled], ([subscription, paygo]) => {
  if (subscription) {
    homeActiveTab.value = homeActiveTab.value === 'paygo' && paygo ? 'paygo' : 'subscription'
    return
  }
  if (paygo) {
    homeActiveTab.value = 'paygo'
  }
})

function periodLabel(days: number) {
  const period = resolvePurchasePeriod(days)
  if (period.key === 'days') {
    return t('purchase.period.days', { days: period.days })
  }
  return t(`purchase.period.${period.key}`)
}

function productHighlights(product: PurchaseProduct) {
  return splitPurchaseHighlights(product.description)
}

function resolveDefaultPaymentMethod() {
  if (alipayEnabled.value) return 'alipay'
  if (wxpayEnabled.value) return 'wxpay'
  return 'points'
}

function openSubscriptionDialog(product: PurchaseProduct) {
  selectedProduct.value = product
  selectedPaymentMethod.value = resolveDefaultPaymentMethod()
  usePointsDeduction.value = (authStore.user?.points_balance || 0) > 0 && selectedPaymentMethod.value !== 'points'
  subscriptionDialogOpen.value = true
}

function closeSubscriptionDialog() {
  subscriptionDialogOpen.value = false
  selectedProduct.value = null
  selectedPaymentMethod.value = null
  usePointsDeduction.value = false
}

async function submitSubscriptionDialog() {
  if (!selectedProduct.value || !selectedPaymentMethod.value) return
  await handleSubscriptionOrder(selectedProduct.value.group_id, selectedPaymentMethod.value)
}

async function handleSubscriptionOrder(groupId: number, method: 'alipay' | 'wxpay' | 'points') {
  const enabled = method === 'alipay' ? alipayEnabled.value : method === 'wxpay' ? wxpayEnabled.value : true
  if (!enabled) return
  const requestKey = `subscription:${method}:${groupId}`
  purchaseSubmittingKey.value = requestKey
  try {
    const result = await purchaseAPI.createOrder({
      group_id: groupId,
      product_type: 'subscription',
      method,
      use_points: method !== 'points' ? usePointsDeduction.value : false
    })
    if (result.method === 'points' || result.status === 'fulfilled') {
      await authStore.refreshUser()
      closeSubscriptionDialog()
      appStore.showSuccess(t('purchase.points.exchangeSuccess'))
      await router.push(`/purchase/success?trade_no=${result.trade_no}&product_type=${result.product_type}`)
      return
    }
    closeSubscriptionDialog()
    submitPaymentForm(result.url, result.form_fields)
  } catch (err: unknown) {
    const message = err && typeof err === 'object' && 'message' in err ? String((err as { message: unknown }).message) : ''
    appStore.showError(message || t('purchase.failedToCreateOrder'))
  } finally {
    purchaseSubmittingKey.value = null
  }
}

async function handlePayGoOrder(payload: { method: 'alipay' | 'wxpay'; amountCny: number }) {
  const requestKey = `paygo:${payload.method}`
  purchaseSubmittingKey.value = requestKey
  try {
    const result = await purchaseAPI.createOrder({
      product_type: 'paygo',
      amount_cny: payload.amountCny,
      method: payload.method
    })
    if (result.method === 'points' || result.status === 'fulfilled') {
      await authStore.refreshUser()
      appStore.showSuccess('余额充值成功')
      await router.push(`/purchase/success?trade_no=${result.trade_no}&product_type=${result.product_type}`)
      return
    }
    submitPaymentForm(result.url, result.form_fields)
  } catch (err: unknown) {
    const message = err && typeof err === 'object' && 'message' in err ? String((err as { message: unknown }).message) : ''
    appStore.showError(message || t('purchase.failedToCreateOrder'))
  } finally {
    purchaseSubmittingKey.value = null
  }
}

function submitPaymentForm(action: string, fields: Record<string, string>) {
  const form = document.createElement('form')
  form.method = 'POST'
  form.action = action
  form.style.display = 'none'
  Object.entries(fields).forEach(([key, value]) => {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = key
    input.value = value
    form.appendChild(input)
  })
  document.body.appendChild(form)
  form.submit()
  form.remove()
}

const tags = computed(() => [
  t('home.tags.subscriptionToApi'),
  t('home.tags.stickySession'),
  t('home.tags.realtimeBilling'),
  t('home.tags.alwaysOn')
])

const stats = computed(() => [
  { value: t('home.stats.subscriptionValue'), label: t('home.stats.unifiedAccess') },
  { value: t('home.stats.modelsValue'), label: t('home.stats.routingLatency') },
  { value: t('home.stats.noBillShockValue'), label: t('home.stats.opsVisibility') }
])

const heroFeatureCards = computed(() => [
  {
    icon: 'link' as const,
    title: t('home.featuresV2.items.compatible.title'),
    description: t('home.featuresV2.items.compatible.description')
  },
  {
    icon: 'refresh' as const,
    title: t('home.featuresV2.items.stable.title'),
    description: t('home.featuresV2.items.stable.description')
  },
  {
    icon: 'chart' as const,
    title: t('home.featuresV2.items.visibility.title'),
    description: t('home.featuresV2.items.visibility.description')
  },
  {
    icon: 'database' as const,
    title: t('home.featuresV2.items.quota.title'),
    description: t('home.featuresV2.items.quota.description')
  },
  {
    icon: 'bolt' as const,
    title: t('home.featuresV2.items.latency.title'),
    description: t('home.featuresV2.items.latency.description')
  },
  {
    icon: 'dollar' as const,
    title: t('home.featuresV2.items.affordable.title'),
    description: t('home.featuresV2.items.affordable.description')
  }
])

const providers = computed(() => [
  'GPT-5.4+',
  'Codex',
  'OpenClaw',
  'Claude',
  t('home.providers.gemini'),
  t('home.providers.more')
])

const testimonials = computed(() => [
  {
    quote: t('home.testimonials.items.0.quote'),
    name: t('home.testimonials.items.0.name'),
    role: t('home.testimonials.items.0.role')
  },
  {
    quote: t('home.testimonials.items.1.quote'),
    name: t('home.testimonials.items.1.name'),
    role: t('home.testimonials.items.1.role')
  }
])

const faqItems = computed(() => [
  {
    question: t('home.faq.items.0.question'),
    answer: t('home.faq.items.0.answer')
  },
  {
    question: t('home.faq.items.1.question'),
    answer: t('home.faq.items.1.answer')
  },
  {
    question: t('home.faq.items.2.question'),
    answer: t('home.faq.items.2.answer')
  },
  {
    question: t('home.faq.items.3.question'),
    answer: t('home.faq.items.3.answer')
  },
  {
    question: t('home.faq.items.4.question'),
    answer: t('home.faq.items.4.answer')
  },
  {
    question: t('home.faq.items.5.question'),
    answer: t('home.faq.items.5.answer')
  },
  {
    question: t('home.faq.items.6.question'),
    answer: t('home.faq.items.6.answer')
  },
  {
    question: t('home.faq.items.7.question'),
    answer: t('home.faq.items.7.answer')
  }
])

const positioningHighlights = computed(() => [
  {
    icon: 'bolt' as const,
    text: t('home.positioning.highlights.0.text')
  },
  {
    icon: 'database' as const,
    text: t('home.positioning.highlights.1.text')
  },
  {
    icon: 'chart' as const,
    text: t('home.positioning.highlights.2.text')
  }
])
const codexInstallHighlights = computed(() => [
  {
    icon: 'key' as const,
    text: t('home.codexInstall.highlights.0')
  },
  {
    icon: 'document' as const,
    text: t('home.codexInstall.highlights.1')
  },
  {
    icon: 'checkCircle' as const,
    text: t('home.codexInstall.highlights.2')
  }
])

const comparisonRows = computed(() => [
  {
    feature: t('home.comparison.items.pricing.feature'),
    official: t('home.comparison.items.pricing.official'),
    us: t('home.comparison.items.pricing.us')
  },
  {
    feature: t('home.comparison.items.models.feature'),
    official: t('home.comparison.items.models.official'),
    us: t('home.comparison.items.models.us')
  },
  {
    feature: t('home.comparison.items.management.feature'),
    official: t('home.comparison.items.management.official'),
    us: t('home.comparison.items.management.us')
  },
  {
    feature: t('home.comparison.items.stability.feature'),
    official: t('home.comparison.items.stability.official'),
    us: t('home.comparison.items.stability.us')
  },
  {
    feature: t('home.comparison.items.control.feature'),
    official: t('home.comparison.items.control.official'),
    us: t('home.comparison.items.control.us')
  }
])

onMounted(async () => {
  authStore.checkAuth()

  if (!appStore.publicSettingsLoaded) {
    await appStore.fetchPublicSettings()
  }

  if (subscriptionEnabled.value) {
    purchaseLoading.value = true
    try {
      purchaseProducts.value = await purchaseAPI.listProducts()
    } catch {
      appStore.showError(t('purchase.failedToLoadProducts'))
    } finally {
      purchaseLoading.value = false
    }
  }
  if (!subscriptionEnabled.value && paygoEnabled.value) {
    homeActiveTab.value = 'paygo'
  }
})
</script>

<style scoped>
.purchase-home-grid {
  @apply grid gap-4 md:grid-cols-2 xl:grid-cols-3;
}
.purchase-home-tabs {
  @apply mx-auto flex w-fit rounded-full border border-[#eedbc9] bg-white p-1 shadow-sm dark:border-white/10 dark:bg-white/5;
}
.purchase-home-tab {
  @apply rounded-full px-6 py-3 text-lg font-semibold text-slate-500 transition-colors dark:text-slate-300;
}
.purchase-home-tab-active {
  @apply bg-emerald-600 text-white shadow-md;
}
.purchase-home-card {
  @apply relative flex min-h-[320px] flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-[#eedbc9] bg-white/90 px-6 py-6 shadow-sm transition-all duration-200 dark:border-white/10 dark:bg-slate-950/50;
}
.purchase-home-card-title {
  @apply text-xl font-semibold text-slate-950 dark:text-white;
}
.purchase-home-marketing-pill {
  @apply inline-flex max-w-[11rem] items-center rounded-full px-2.5 py-0.5 text-xs font-medium leading-tight;
  background-color: #e0f7f4;
  color: #00897b;
}
:global(.dark) .purchase-home-marketing-pill {
  background-color: rgba(45, 212, 191, 0.15);
  color: #5eead4;
}
.purchase-home-price {
  @apply text-3xl font-semibold text-slate-950 dark:text-white;
}
.purchase-home-period {
  @apply text-sm text-slate-500 dark:text-slate-400;
}
.purchase-home-highlights {
  @apply space-y-2 text-sm;
}
.purchase-home-highlight-dot {
  @apply mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500;
}
.purchase-home-actions {
  @apply grid gap-3;
}
.purchase-home-btn {
  @apply inline-flex min-h-[48px] items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors;
}
.purchase-home-btn-primary {
  color: #fff;
  background: linear-gradient(135deg, #fb7185 0%, #60a5fa 100%);
  box-shadow: 0 16px 36px rgba(244, 114, 182, 0.18);
}
</style>
