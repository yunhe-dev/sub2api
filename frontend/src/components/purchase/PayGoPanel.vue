<template>
  <section class="paygo-panel" :class="{ 'paygo-panel-purchase': isPurchasePage }">
    <div v-if="!isPurchasePage" class="paygo-shell">
      <div class="paygo-header">
        <div>
          <div class="paygo-title">{{ titleText }}</div>
          <p v-if="descriptionText" class="paygo-description">{{ descriptionText }}</p>
        </div>
        <span class="paygo-badge">{{ badgeTextValue }}</span>
      </div>

      <a
        v-if="priceDetailsUrl"
        class="paygo-details-link"
        :href="priceDetailsUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        查看按量模型价格明细
      </a>

      <div class="paygo-card">
        <div class="paygo-notice">
          <div class="paygo-notice-title">{{ noticeTitleText }}</div>
          <div class="paygo-notice-desc">{{ noticeDescriptionText }}</div>
        </div>

        <div class="paygo-field">
          <div class="paygo-label">预设充值额度</div>
          <div class="paygo-presets">
            <button
              v-for="amount in presets"
              :key="amount"
              type="button"
              class="paygo-preset"
              :class="{ 'paygo-preset-active': amount === amountCny }"
              @click="applyAmount(amount)"
            >
              <div class="paygo-preset-main">{{ quotaLabelByCny(amount) }}</div>
              <div class="paygo-preset-sub">￥{{ formatAmount(amount) }}</div>
            </button>
          </div>
        </div>

        <div class="paygo-grid">
          <div class="paygo-field">
            <div class="paygo-label">自定义充值金额</div>
            <div class="paygo-input-wrap">
              <span class="paygo-input-prefix">￥</span>
              <input
                v-model.number="amountInput"
                type="number"
                min="0"
                step="1"
                class="paygo-input"
                @blur="commitInputAmount"
              />
            </div>
            <div class="paygo-hint">最低充值 ￥{{ formatAmount(minAmount) }}</div>
          </div>

          <div class="paygo-field">
            <div class="paygo-label">拖动滑块评估额度</div>
            <input
              v-model.number="sliderAmount"
              type="range"
              class="paygo-slider"
              :min="sliderMin"
              :max="sliderMax"
              :step="sliderStep"
              @input="applySliderAmount"
            />
            <div class="paygo-slider-meta">
              <span>￥{{ formatAmount(sliderMin) }}</span>
              <span>￥{{ formatAmount(sliderMax) }}</span>
            </div>
          </div>
        </div>

        <div class="paygo-stats">
          <div class="paygo-stat">
            <div class="paygo-stat-label">充值金额</div>
            <div class="paygo-stat-value">￥{{ formatAmount(amountCny) }}</div>
          </div>
          <div class="paygo-stat">
            <div class="paygo-stat-label">到账美元额度</div>
            <div class="paygo-stat-value">${{ formatAmount(balanceAmountUsd) }}</div>
          </div>
          <div class="paygo-stat">
            <div class="paygo-stat-label">预计可用 Token</div>
            <div class="paygo-stat-value">{{ formatTokenMillions(tokenEstimateMillions) }}M</div>
          </div>
        </div>

        <div class="paygo-actions">
          <button
            type="button"
            class="paygo-action paygo-action-wechat"
            :disabled="!wxpayEnabled || !canSubmit"
            @click="emitCreateOrder('wxpay')"
          >
            {{ submittingKey === 'paygo:wxpay' ? '处理中...' : '微信支付' }}
          </button>
          <button
            type="button"
            class="paygo-action paygo-action-alipay"
            :disabled="!alipayEnabled || !canSubmit"
            @click="emitCreateOrder('alipay')"
          >
            {{ submittingKey === 'paygo:alipay' ? '处理中...' : '支付宝' }}
          </button>
        </div>
      </div>
    </div>

    <div v-else class="paygo-purchase-shell">
      <div class="paygo-purchase-banner">
        <div class="paygo-purchase-banner-inner">
          <div class="paygo-purchase-banner-copy">
            <h3 class="paygo-purchase-banner-title">{{ noticeTitleText }}</h3>
            <p class="paygo-purchase-banner-desc">{{ bannerDescriptionText }}</p>
          </div>
          <div class="paygo-purchase-banner-badge">
            <span class="paygo-purchase-banner-badge-dot" aria-hidden="true" />
            <span>{{ badgeTextValue }}</span>
          </div>
        </div>
      </div>

      <div class="paygo-purchase-account">
        <div class="paygo-purchase-account-header">
          <div>
            <div class="paygo-purchase-account-label">充值账户</div>
            <div class="paygo-purchase-account-email">{{ accountEmailText }}</div>
          </div>
          <div class="paygo-purchase-account-points-chip">积分 {{ formatAmount(currentPointsValue) }}</div>
        </div>

        <div class="paygo-purchase-account-stats-card">
          <div class="paygo-purchase-account-stats-title">账户统计</div>
          <div class="paygo-purchase-account-stats-grid">
            <div class="paygo-purchase-account-stat">
              <div class="paygo-purchase-account-stat-value" :title="`$${formatAmount(accountBalanceValue)}`">${{ formatAmount(accountBalanceValue) }}</div>
              <div class="paygo-purchase-account-stat-label">当前余额</div>
            </div>
            <div class="paygo-purchase-account-stat">
              <div class="paygo-purchase-account-stat-value" :title="`$${formatAmount(totalActualCostValue)}`">${{ formatAmount(totalActualCostValue) }}</div>
              <div class="paygo-purchase-account-stat-label">历史消耗</div>
            </div>
            <div class="paygo-purchase-account-stat">
              <div class="paygo-purchase-account-stat-value" :title="formatCount(totalRequestsValue)">{{ formatCount(totalRequestsValue) }}</div>
              <div class="paygo-purchase-account-stat-label">请求次数</div>
            </div>
          </div>
        </div>
      </div>

      <div class="paygo-purchase-section">
        <div class="paygo-purchase-section-head">
          <div>
            <div class="paygo-purchase-section-title">选择充值方案</div>
          </div>
        </div>
        <div class="paygo-purchase-presets">
          <button
            v-for="pkg in packageCards"
            :key="pkg.package_key || `${pkg.quota_usd}-${pkg.price_cny}`"
            type="button"
            class="paygo-purchase-preset"
            :class="{
              'paygo-purchase-preset-active': pkg.price_cny === amountCny,
              'paygo-purchase-preset-first-only': pkg.first_purchase_only
            }"
            @click="applyAmount(pkg.price_cny)"
          >
            <div class="paygo-purchase-preset-top">
              <div class="paygo-purchase-preset-main-group">
                <div class="paygo-preset-eyebrow-row">
                  <div class="paygo-preset-eyebrow">额度</div>
                  <span v-if="pkg.badge_text" class="paygo-purchase-preset-badge" :class="{ 'paygo-purchase-preset-badge-special': pkg.first_purchase_only }">
                    {{ pkg.badge_text }}
                  </span>
                </div>
                <div class="paygo-preset-main">${{ formatQuota(pkg.quota_usd) }}</div>
              </div>
              <div class="paygo-purchase-preset-discount">{{ formatDiscountFold(pkg.discount_fold) }}</div>
            </div>
            <div class="paygo-purchase-preset-metrics">
              <div class="paygo-purchase-preset-metric">
                <span class="paygo-purchase-preset-metric-label">实付</span>
                <span class="paygo-purchase-preset-metric-value">￥{{ formatAmount(pkg.price_cny) }}</span>
              </div>
              <div class="paygo-purchase-preset-metric">
                <span class="paygo-purchase-preset-metric-label">节省</span>
                <span class="paygo-purchase-preset-metric-value">￥{{ formatAmount(pkg.saving_cny) }}</span>
              </div>
            </div>
            <div v-if="pkg.description" class="paygo-purchase-preset-note">{{ pkg.description }}</div>
          </button>
        </div>
      </div>

      <div class="paygo-purchase-pay-row">
        <div class="paygo-purchase-pay-amount">当前需支付：￥{{ formatAmount(amountCny) }}</div>
        <div class="paygo-purchase-actions">
          <button
            type="button"
            class="paygo-purchase-action paygo-purchase-action-alipay"
            :disabled="!alipayEnabled || !canSubmit"
            @click="emitCreateOrder('alipay')"
          >
            {{ submittingKey === 'paygo:alipay' ? '处理中...' : `支付宝 ￥${formatAmount(amountCny)}` }}
          </button>
          <button
            type="button"
            class="paygo-purchase-action paygo-purchase-action-wechat"
            :disabled="!wxpayEnabled || !canSubmit"
            @click="emitCreateOrder('wxpay')"
          >
            {{ submittingKey === 'paygo:wxpay' ? '处理中...' : `微信支付 ￥${formatAmount(amountCny)}` }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { PayGoPresetPackage } from '@/types'

const props = withDefaults(defineProps<{
  title?: string
  description?: string
  badgeText?: string
  noticeTitle?: string
  noticeDescription?: string
  presetPackages?: PayGoPresetPackage[]
  rateRmbToUsd: number
  minAmountCny: number
  presetAmountsCny: number[]
  sliderMinAmountCny: number
  sliderMaxAmountCny: number
  sliderStepAmountCny: number
  tokenPerUsdMillion: number
  priceDetailsUrl?: string
  alipayEnabled: boolean
  wxpayEnabled: boolean
  submittingKey?: string | null
  variant?: 'default' | 'purchase-page'
  accountEmail?: string
  accountBalance?: number
  currentPoints?: number
  totalActualCost?: number
  totalRequests?: number
}>(), {
  title: 'Pay As You Go',
  description: '',
  badgeText: '按量付费',
  noticeTitle: '1刀额度 = 1元人民币 = 1M token',
  noticeDescription: '最低充值 100 元人民币，适合先按额度估算再灵活充值。',
  priceDetailsUrl: '',
  submittingKey: null,
  variant: 'default',
  accountEmail: '',
  accountBalance: 0,
  currentPoints: 0,
  totalActualCost: 0,
  totalRequests: 0
})

const emit = defineEmits<{
  (e: 'create-order', payload: { method: 'alipay' | 'wxpay'; amountCny: number }): void
}>()

const defaultPackages: PayGoPresetPackage[] = [
  { package_key: 'paygo-100-100', quota_usd: 100, price_cny: 100, first_purchase_only: false, badge_text: '', description: '' },
  { package_key: 'paygo-300-300', quota_usd: 300, price_cny: 300, first_purchase_only: false, badge_text: '', description: '' },
  { package_key: 'paygo-500-500', quota_usd: 500, price_cny: 500, first_purchase_only: false, badge_text: '', description: '' },
  { package_key: 'paygo-1000-1000', quota_usd: 1000, price_cny: 1000, first_purchase_only: false, badge_text: '', description: '' }
]

const normalizedPresetPackages = computed(() => {
  const next = (props.presetPackages || [])
    .map((item) => ({
      package_key: String(item?.package_key || '').trim(),
      quota_usd: roundNumber(Number(item?.quota_usd) || 0),
      price_cny: roundNumber(Number(item?.price_cny) || 0),
      first_purchase_only: item?.first_purchase_only === true,
      badge_text: String(item?.badge_text || '').trim(),
      description: String(item?.description || '').trim()
    }))
    .filter((item) => item.quota_usd > 0 && item.price_cny > 0)

  if (next.length) return next

  const fallbackRate = props.rateRmbToUsd > 0 ? props.rateRmbToUsd : 1
  const legacy = Array.from(new Set((props.presetAmountsCny || []).filter((item) => item > 0))).map((price) => ({
    package_key: `legacy-paygo-${roundNumber(price)}`,
    quota_usd: roundNumber(price / fallbackRate),
    price_cny: roundNumber(price),
    first_purchase_only: false,
    badge_text: '',
    description: ''
  }))

  return legacy.length ? legacy : defaultPackages
})

const presets = computed(() => normalizedPresetPackages.value.map((item) => item.price_cny))

const baselinePricePerQuota = computed(() => {
  const baseRate = props.rateRmbToUsd > 0 ? props.rateRmbToUsd : 1
  return baseRate
})

const packageCards = computed(() =>
  normalizedPresetPackages.value.map((item) => {
    const listPrice = roundNumber(item.quota_usd * baselinePricePerQuota.value)
    const discountFold = listPrice > 0 ? roundNumber((item.price_cny / listPrice) * 10) : 10
    const savingCny = Math.max(0, roundNumber(listPrice - item.price_cny))
    return {
      ...item,
      list_price_cny: listPrice,
      discount_fold: discountFold,
      saving_cny: savingCny
    }
  })
)

const minAmount = computed(() => {
  if (normalizedPresetPackages.value.length) {
    return Math.min(...normalizedPresetPackages.value.map((item) => item.price_cny))
  }
  return props.minAmountCny > 0 ? props.minAmountCny : 100
})
const sliderMin = computed(() => (props.sliderMinAmountCny > 0 ? props.sliderMinAmountCny : minAmount.value))
const sliderMax = computed(() => Math.max(sliderMin.value, props.sliderMaxAmountCny || presets.value[presets.value.length - 1] || sliderMin.value))
const sliderStep = computed(() => (props.sliderStepAmountCny > 0 ? props.sliderStepAmountCny : 1))

const initialAmount = computed(() => presets.value[0] || minAmount.value)
const amountCny = ref(initialAmount.value)
const amountInput = ref(initialAmount.value)
const sliderAmount = ref(clampAmount(initialAmount.value))
const selectedPresetPackage = computed(() =>
  normalizedPresetPackages.value.find((item) => isSameAmount(item.price_cny, amountCny.value)) || null
)

watch(initialAmount, (value) => {
  amountCny.value = value
  amountInput.value = value
  sliderAmount.value = clampAmount(value)
})

watch(amountInput, (value) => {
  const numeric = Number(value)
  if (!Number.isFinite(numeric)) {
    amountCny.value = 0
    return
  }

  amountCny.value = Math.max(0, numeric)
  sliderAmount.value = clampAmount(numeric)
})

const rate = computed(() => (props.rateRmbToUsd > 0 ? props.rateRmbToUsd : 1))
const tokenPerUsd = computed(() => (props.tokenPerUsdMillion > 0 ? props.tokenPerUsdMillion : 1))
const isPurchasePage = computed(() => props.variant === 'purchase-page')

const balanceAmountUsd = computed(() => selectedPresetPackage.value?.quota_usd ?? roundNumber(amountCny.value / rate.value))
const tokenEstimateMillions = computed(() => roundNumber(balanceAmountUsd.value * tokenPerUsd.value))
const canSubmit = computed(() => (isPurchasePage.value ? !!selectedPresetPackage.value : amountCny.value >= minAmount.value))

const titleText = computed(() => props.title || 'Pay As You Go')
const descriptionText = computed(() => props.description || '')
const badgeTextValue = computed(() => props.badgeText || '按量付费')
const noticeTitleText = computed(() => props.noticeTitle || '1刀额度 = 1元人民币 = 1M token')
const noticeDescriptionText = computed(() => props.noticeDescription || '最低充值 100 元人民币，适合先按额度估算再灵活充值。')
/** Purchase banner body: prefer admin「提示说明」，旧描述仅作回退 */
const bannerDescriptionText = computed(() => {
  const fromNotice = (props.noticeDescription || '').trim()
  if (fromNotice) return fromNotice
  const fromDesc = (props.description || '').trim()
  if (fromDesc) return fromDesc
  return noticeDescriptionText.value
})
const accountEmailText = computed(() => props.accountEmail || '--')
const accountBalanceValue = computed(() => props.accountBalance || 0)
const currentPointsValue = computed(() => props.currentPoints || 0)
const totalActualCostValue = computed(() => props.totalActualCost || 0)
const totalRequestsValue = computed(() => props.totalRequests || 0)

function roundNumber(value: number): number {
  return Math.round(value * 100) / 100
}

function isSameAmount(a: number, b: number): boolean {
  return Math.abs(roundNumber(a) - roundNumber(b)) < 0.001
}

function clampAmount(value: number): number {
  const stepped = Math.round(value / sliderStep.value) * sliderStep.value
  return Math.min(sliderMax.value, Math.max(sliderMin.value, stepped))
}

function applyAmount(value: number) {
  amountCny.value = value
  amountInput.value = value
  sliderAmount.value = clampAmount(value)
}

function applySliderAmount() {
  const value = clampAmount(Number(sliderAmount.value))
  applyAmount(value)
}

function commitInputAmount() {
  const raw = Number(amountInput.value) || 0
  applyAmount(raw)
}

function emitCreateOrder(method: 'alipay' | 'wxpay') {
  if (!canSubmit.value) {
    return
  }
  emit('create-order', { method, amountCny: amountCny.value })
}

function formatAmount(value: number): string {
  return roundNumber(value).toFixed(2).replace(/\.00$/, '')
}

function formatTokenMillions(value: number): string {
  const rounded = roundNumber(value)
  return rounded >= 100 ? rounded.toFixed(0) : rounded.toFixed(2).replace(/\.00$/, '')
}

function formatQuota(value: number): string {
  const rounded = roundNumber(value)
  return rounded >= 100 ? rounded.toFixed(0) : rounded.toFixed(2).replace(/\.00$/, '')
}

function formatDiscountFold(value: number): string {
  return `${roundNumber(value).toFixed(1)}折`
}

function formatUsdQuota(value: number): string {
  const rounded = roundNumber(value)
  return rounded >= 100 ? rounded.toFixed(0) : rounded.toFixed(2).replace(/\.00$/, '')
}

function formatCount(value: number): string {
  return Math.round(Number.isFinite(value) ? value : 0).toLocaleString()
}

function quotaLabelByCny(amount: number): string {
  const preset = normalizedPresetPackages.value.find((item) => isSameAmount(item.price_cny, amount))
  const usdAmount = preset?.quota_usd ?? roundNumber((Number.isFinite(amount) ? amount : 0) / rate.value)
  return `${formatUsdQuota(usdAmount)}刀 模型通用`
}
</script>

<style scoped>
.paygo-panel {
  width: 100%;
}

.paygo-shell {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.paygo-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(52, 211, 153, 0.35);
  border-radius: 1.75rem;
  background: linear-gradient(135deg, rgba(236, 253, 245, 0.92), rgba(240, 253, 250, 0.88));
}

.paygo-title {
  font-size: 1.9rem;
  font-weight: 700;
  color: #0f172a;
}

.paygo-description {
  margin-top: 0.5rem;
  color: #475569;
  line-height: 1.7;
}

.paygo-badge {
  align-self: flex-start;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.12);
  color: #0f766e;
  font-weight: 600;
}

.paygo-details-link {
  align-self: center;
  padding: 0.9rem 1.5rem;
  border-radius: 9999px;
  border: 1px solid rgba(52, 211, 153, 0.45);
  color: #047857;
  font-weight: 600;
}

.paygo-card {
  padding: 1.75rem;
  border-radius: 2rem;
  border: 1px solid rgba(52, 211, 153, 0.35);
  background: linear-gradient(135deg, rgba(248, 250, 252, 0.98), rgba(236, 253, 245, 0.88));
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.paygo-notice {
  border-radius: 1.25rem;
  background: rgba(209, 250, 229, 0.72);
  padding: 1.2rem 1.4rem;
}

.paygo-notice-title {
  color: #065f46;
  font-weight: 700;
  font-size: 1.1rem;
}

.paygo-notice-desc {
  margin-top: 0.35rem;
  color: #0f766e;
}

.paygo-label {
  margin-bottom: 0.75rem;
  font-weight: 700;
  color: #047857;
}

.paygo-presets {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.8rem;
}

.paygo-preset,
.paygo-action {
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 1rem;
  padding: 0.85rem 1rem;
  font-size: 1.1rem;
  font-weight: 700;
  transition: all 0.2s ease;
}

.paygo-preset-main {
  font-size: 1rem;
  line-height: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.01em;
}

.paygo-preset-eyebrow {
  font-size: 0.72rem;
  line-height: 1rem;
  font-weight: 700;
  color: #94a3b8;
  letter-spacing: 0.08em;
}

.paygo-preset-sub {
  margin-top: 0.28rem;
  font-size: 0.84rem;
  color: #64748b;
}

.paygo-preset-active {
  border-color: rgba(5, 150, 105, 0.55);
  background: linear-gradient(135deg, rgba(236, 253, 245, 0.98), rgba(220, 252, 231, 0.96));
  color: #065f46;
  box-shadow: 0 12px 28px rgba(5, 150, 105, 0.12);
}

.paygo-preset-active .paygo-preset-eyebrow,
.paygo-preset-active .paygo-preset-sub {
  color: #047857;
}

.paygo-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: 1rem;
}

.paygo-input-wrap {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.95rem 1.1rem;
  border-radius: 1rem;
  border: 1px solid rgba(148, 163, 184, 0.22);
  background: rgba(255, 255, 255, 0.86);
}

.paygo-input-prefix {
  font-size: 1.3rem;
  font-weight: 700;
  color: #334155;
}

.paygo-input {
  width: 100%;
  font-size: 1.3rem;
  font-weight: 700;
  background: transparent;
  outline: none;
}

.paygo-hint,
.paygo-slider-meta {
  margin-top: 0.5rem;
  color: #64748b;
  font-size: 0.9rem;
}

.paygo-slider-meta {
  display: flex;
  justify-content: space-between;
}

.paygo-slider {
  width: 100%;
  accent-color: #059669;
  margin-top: 1rem;
}

.paygo-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.paygo-stat {
  padding: 1.25rem;
  border-radius: 1.25rem;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(255, 255, 255, 0.82);
}

.paygo-stat-label {
  color: #64748b;
  font-size: 0.95rem;
}

.paygo-stat-value {
  margin-top: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
  color: #0f172a;
}

.paygo-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.paygo-action-wechat {
  background: #059669;
  color: #fff;
}

.paygo-action-alipay {
  background: #2563eb;
  color: #fff;
}

.paygo-action:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.paygo-purchase-shell {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.paygo-purchase-banner,
.paygo-purchase-account,
.paygo-purchase-section,
.paygo-purchase-custom-slider-row,
.paygo-purchase-pay-row {
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.paygo-purchase-banner {
  padding-bottom: 0.15rem;
}

.paygo-purchase-banner-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem 1.25rem;
  padding: 1.1rem 1.25rem;
  border-radius: 1rem;
  border: 1px solid #a7f3d0;
  background: #ecfdf5;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
}

.paygo-purchase-banner-copy {
  flex: 1 1 14rem;
  min-width: 0;
}

.paygo-purchase-banner-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  color: #065f46;
}

.paygo-purchase-banner-desc {
  margin: 0.45rem 0 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.65;
  color: #4b5563;
}

.paygo-purchase-banner-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  border: 1px solid #a7f3d0;
  background: #fff;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #065f46;
  white-space: nowrap;
}

.paygo-purchase-banner-badge-dot {
  display: block;
  width: 0.45rem;
  height: 0.45rem;
  flex-shrink: 0;
  border-radius: 9999px;
  background: #10b981;
}

:global(.dark) .paygo-purchase-banner-inner {
  border-color: rgba(52, 211, 153, 0.35);
  background: rgba(6, 78, 59, 0.35);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

:global(.dark) .paygo-purchase-banner-title {
  color: #a7f3d0;
}

:global(.dark) .paygo-purchase-banner-desc {
  color: #cbd5e1;
}

:global(.dark) .paygo-purchase-banner-badge {
  border-color: rgba(52, 211, 153, 0.4);
  background: rgba(15, 23, 42, 0.6);
  color: #d1fae5;
}

:global(.dark) .paygo-purchase-account-email {
  color: #f8fafc;
}

:global(.dark) .paygo-purchase-account-points-chip {
  border-color: rgba(96, 165, 250, 0.32);
  background: rgba(30, 41, 59, 0.82);
  color: #bfdbfe;
}

.paygo-purchase-account,
.paygo-purchase-section,
.paygo-purchase-custom-slider-row,
.paygo-purchase-pay-row {
  padding: 0.65rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.paygo-purchase-custom-slider-row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem 1.75rem;
}

.paygo-purchase-custom-col {
  flex: 1 1 14rem;
  min-width: 0;
}

.paygo-purchase-custom-main {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(220px, 0.95fr);
  gap: 0.75rem;
  align-items: stretch;
}

.paygo-purchase-slider-col {
  flex: 1.15 1 18rem;
  min-width: 0;
}

.paygo-purchase-slider-col .paygo-purchase-slider-head {
  margin-bottom: 0.35rem;
}

.paygo-purchase-slider-col .paygo-slider {
  margin-top: 0.5rem;
}

.paygo-purchase-slider-input {
  display: block;
}

.paygo-purchase-account-label,
.paygo-purchase-section-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #334155;
}

.paygo-purchase-account-header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem 0.85rem;
}

.paygo-purchase-section-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.paygo-purchase-account-email {
  margin-top: 0.08rem;
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
  word-break: break-all;
}

.paygo-purchase-account-points-chip {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.22rem 0.62rem;
  border: 1px solid rgba(96, 165, 250, 0.32);
  background: rgba(239, 246, 255, 0.92);
  color: #1d4ed8;
  font-size: 0.76rem;
  font-weight: 700;
}

.paygo-purchase-account-stats-card {
  margin-top: 0.45rem;
  padding: 0.7rem 0.8rem 0.75rem;
  border-radius: 0.85rem;
  background:
    radial-gradient(circle at top left, rgba(125, 211, 252, 0.26), transparent 34%),
    radial-gradient(circle at top right, rgba(167, 139, 250, 0.24), transparent 30%),
    linear-gradient(135deg, #2563eb 0%, #3156d3 48%, #1d4ed8 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    0 18px 40px rgba(37, 99, 235, 0.22);
}

.paygo-purchase-account-stats-title {
  color: rgba(255, 255, 255, 0.96);
  font-size: 1.1rem;
  font-weight: 800;
  line-height: 1.2;
}

.paygo-purchase-account-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.45rem;
  margin-top: 0.65rem;
}

.paygo-purchase-account-stat {
  min-width: 0;
  padding: 0.5rem 0.6rem;
  border-radius: 0.7rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.paygo-purchase-account-stat-value {
  display: block;
  color: #fff;
  font-size: clamp(1rem, 0.92vw, 1.25rem);
  font-weight: 800;
  line-height: 1.08;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.paygo-purchase-account-stat-label {
  margin-top: 0.18rem;
  color: rgba(219, 234, 254, 0.96);
  font-size: 0.76rem;
  font-weight: 500;
}

.paygo-purchase-presets {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.7rem;
  margin-top: 0.65rem;
}

.paygo-purchase-preset {
  min-height: 7.6rem;
  padding: 0.85rem 0.9rem;
  border-radius: 0.9rem;
  border: 1px solid rgba(110, 231, 183, 0.42);
  background: linear-gradient(135deg, rgba(244, 253, 248, 0.98), rgba(236, 253, 245, 0.96));
  color: #334155;
  transition: all 0.2s ease;
  text-align: left;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
}

.paygo-purchase-preset-active {
  border-color: #10b981;
  background: linear-gradient(135deg, rgba(236, 253, 245, 0.98), rgba(220, 252, 231, 0.96));
  color: #047857;
  box-shadow: 0 10px 26px rgba(16, 185, 129, 0.12);
}

.paygo-purchase-preset-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}

.paygo-preset-eyebrow-row {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-wrap: wrap;
}

.paygo-purchase-preset-main-group {
  min-width: 0;
}

.paygo-purchase-preset-badge {
  display: inline-flex;
  align-items: center;
  min-height: 1.45rem;
  padding: 0 0.55rem;
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.12);
  color: #047857;
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
}

.paygo-purchase-preset-badge-special {
  background: rgba(239, 68, 68, 0.12);
  color: #dc2626;
}

.paygo-purchase-preset-discount {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 3.9rem;
  padding: 0.25rem 0.55rem;
  border-radius: 9999px;
  background: rgba(37, 99, 235, 0.08);
  color: #1d4ed8;
  font-size: 0.78rem;
  font-weight: 700;
  white-space: nowrap;
}

.paygo-purchase-preset-metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.55rem;
  margin-top: 0.95rem;
}

.paygo-purchase-preset-metric {
  min-width: 0;
  padding: 0.55rem 0.65rem;
  border-radius: 0.72rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(110, 231, 183, 0.18);
}

.paygo-purchase-preset-metric-label {
  display: block;
  color: #64748b;
  font-size: 0.72rem;
  font-weight: 600;
}

.paygo-purchase-preset-metric-value {
  display: block;
  margin-top: 0.18rem;
  color: #0f172a;
  font-size: 0.88rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.paygo-purchase-preset-note {
  margin-top: 0.8rem;
  color: #047857;
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.45;
}

.paygo-purchase-preset-first-only {
  border-color: rgba(248, 113, 113, 0.5);
  background: linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(254, 242, 242, 0.96));
}

.paygo-purchase-preset-first-only .paygo-purchase-preset-discount {
  background: rgba(239, 68, 68, 0.12);
  color: #dc2626;
}

.paygo-purchase-preset-first-only .paygo-purchase-preset-metric {
  background: rgba(255, 245, 245, 0.96);
  border-color: rgba(252, 165, 165, 0.35);
}

.paygo-purchase-preset-active .paygo-purchase-preset-discount {
  background: rgba(16, 185, 129, 0.14);
  color: #047857;
}

.paygo-purchase-preset-active .paygo-purchase-preset-metric {
  background: rgba(236, 253, 245, 0.9);
  border-color: rgba(16, 185, 129, 0.18);
}

.paygo-purchase-preset-first-only.paygo-purchase-preset-active {
  border-color: #ef4444;
  background: linear-gradient(135deg, rgba(254, 242, 242, 1), rgba(254, 226, 226, 0.98));
  color: #991b1b;
  box-shadow: 0 10px 26px rgba(239, 68, 68, 0.14);
}

.paygo-purchase-preset-first-only.paygo-purchase-preset-active .paygo-purchase-preset-discount {
  background: rgba(220, 38, 38, 0.14);
  color: #b91c1c;
}

.paygo-purchase-preset-first-only.paygo-purchase-preset-active .paygo-purchase-preset-metric {
  background: rgba(255, 255, 255, 0.72);
  border-color: rgba(248, 113, 113, 0.28);
}

.paygo-purchase-input-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.65rem;
  min-height: 3.9rem;
  padding: 0 1.1rem;
  border-radius: 0.9rem;
  border: 1px solid #d8dee9;
  background: #fff;
}

.paygo-purchase-input-prefix {
  color: #94a3b8;
  font-size: 1.1rem;
  font-weight: 700;
}

.paygo-purchase-input {
  width: 100%;
  color: #0f172a;
  font-size: 1rem;
  font-weight: 600;
  background: transparent;
  outline: none;
}

.paygo-purchase-hint {
  margin-top: 0.6rem;
  color: #64748b;
  font-size: 0.85rem;
}

.paygo-purchase-hint-link {
  color: #2563eb;
}

.paygo-purchase-inline-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.7rem;
  margin-top: 0.65rem;
}

.paygo-purchase-inline-stat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 3.9rem;
  padding: 0.65rem 0.8rem;
  border: 1px solid #d8dee9;
  border-radius: 0.9rem;
  background: #f8fafc;
}

.paygo-purchase-inline-stat-label {
  color: #64748b;
  font-size: 0.78rem;
  font-weight: 600;
}

.paygo-purchase-inline-stat-value {
  margin-top: 0.22rem;
  color: #0f172a;
  font-size: 0.92rem;
  font-weight: 700;
}

.paygo-purchase-slider-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: #475569;
  font-weight: 600;
  font-size: 0.92rem;
}

.paygo-purchase-pay-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 0;
  padding-bottom: 0;
}

.paygo-purchase-pay-amount {
  color: #475569;
  font-size: 0.92rem;
  font-weight: 700;
}

.paygo-purchase-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;
  width: min(100%, 52rem);
}

.paygo-purchase-action {
  min-height: 3.5rem;
  border-radius: 1rem;
  font-size: 0.92rem;
  font-weight: 700;
  color: #fff;
  transition: all 0.2s ease;
}

.paygo-purchase-action-alipay {
  background: #2563eb;
}

.paygo-purchase-action-wechat {
  background: #16a34a;
}

.paygo-purchase-action:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 900px) {
  .paygo-grid,
  .paygo-stats,
  .paygo-actions {
    grid-template-columns: 1fr;
  }

  .paygo-header {
    flex-direction: column;
  }

  .paygo-purchase-presets,
  .paygo-purchase-actions {
    grid-template-columns: 1fr;
  }

  .paygo-purchase-custom-main,
  .paygo-purchase-inline-stats {
    grid-template-columns: 1fr;
  }

  .paygo-purchase-pay-row,
  .paygo-purchase-slider-head,
  .paygo-purchase-banner-inner,
  .paygo-purchase-custom-slider-row {
    flex-direction: column;
    align-items: stretch;
  }

  .paygo-purchase-banner-badge {
    align-self: flex-end;
  }

  .paygo-purchase-section-head {
    display: flex;
    flex-direction: column;
  }

  .paygo-purchase-account-email {
    font-size: 0.94rem;
  }
}
</style>

