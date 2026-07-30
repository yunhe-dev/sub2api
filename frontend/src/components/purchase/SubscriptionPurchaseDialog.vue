<template>
  <BaseDialog
    :show="show"
    :title="t('purchase.dialog.title')"
    width="normal"
    :close-on-click-outside="true"
    @close="emit('close')"
  >
    <div v-if="product" class="subscription-dialog">
      <div class="subscription-dialog-head">
        <div class="subscription-dialog-icon">
          <Icon name="gift" size="lg" />
        </div>
        <div class="subscription-dialog-head-copy">
          <h4 class="subscription-dialog-heading">{{ t('purchase.dialog.title') }}</h4>
          <p class="subscription-dialog-subtitle">{{ t('purchase.dialog.subtitle') }}</p>
        </div>
      </div>

      <section class="subscription-dialog-card">
        <div class="subscription-dialog-rows">
          <div class="subscription-dialog-row">
            <span class="subscription-dialog-label">{{ t('purchase.dialog.fields.name') }}</span>
            <span class="subscription-dialog-value">{{ product.name }}</span>
          </div>
          <div class="subscription-dialog-row">
            <span class="subscription-dialog-label">{{ t('purchase.dialog.fields.validity') }}</span>
            <span class="subscription-dialog-value">
              <Icon name="calendar" size="sm" class="subscription-dialog-inline-icon" />
              {{ validityText }}
            </span>
          </div>
          <div class="subscription-dialog-row">
            <span class="subscription-dialog-label">{{ t('purchase.dialog.fields.resetPeriod') }}</span>
            <span class="subscription-dialog-value">{{ resetPeriodText }}</span>
          </div>
          <div class="subscription-dialog-row">
            <span class="subscription-dialog-label">{{ t('purchase.dialog.fields.dailyQuota') }}</span>
            <span class="subscription-dialog-value">
              <Icon name="cube" size="sm" class="subscription-dialog-inline-icon" />
              {{ quotaText }}
            </span>
          </div>
          <div v-if="highlights.length" class="subscription-dialog-row subscription-dialog-row-highlights">
            <span class="subscription-dialog-label">{{ t('purchase.dialog.fields.benefits') }}</span>
            <ul class="subscription-dialog-highlights">
              <li
                v-for="item in highlights"
                :key="item"
                class="subscription-dialog-highlight-item"
              >
                <span class="subscription-dialog-highlight-dot" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="subscription-dialog-total">
          <span class="subscription-dialog-total-label">{{ t('purchase.dialog.fields.total') }}</span>
          <span class="subscription-dialog-total-value">￥{{ formatPurchasePriceCNY(product.purchase_price_cny) }}</span>
        </div>
        <div
          v-if="selectedMethod !== 'points' && props.currentPoints > 0"
          class="subscription-dialog-deduction"
        >
          <label class="subscription-dialog-deduction-toggle">
            <input
              :checked="usePointsDeduction"
              type="checkbox"
              @change="toggleUsePoints(($event.target as HTMLInputElement).checked)"
            >
            <span>使用积分抵扣</span>
          </label>
          <p v-if="usePointsDeduction" class="subscription-dialog-deduction-hint">
            可抵扣 ￥{{ pointsDeductionAmount.toFixed(2) }}，还需支付 ￥{{ cashAmountAfterDeduction.toFixed(2) }}
          </p>
        </div>
      </section>

      <div class="subscription-dialog-payment">
        <div class="subscription-dialog-payment-label">{{ t('purchase.dialog.paymentLabel') }}</div>
        <div class="subscription-dialog-payment-controls">
          <Select
            v-model="selectedMethodProxy"
            class="subscription-dialog-select"
            :options="methodOptions"
            :placeholder="t('purchase.dialog.selectPlaceholder')"
          />
          <button
            type="button"
            class="subscription-dialog-submit"
            :disabled="!canSubmit"
            @click="submit"
          >
            {{ submitText }}
          </button>
        </div>
        <p v-if="selectedMethod === 'points'" class="subscription-dialog-points-hint">
          {{
            canExchangeWithPoints
              ? t('purchase.points.enough', { points: pointsRequired.toFixed(2) })
              : t('purchase.points.short', {
                  required: pointsRequired.toFixed(2),
                  short: pointsShortfall.toFixed(2)
                })
          }}
        </p>
      </div>
    </div>
  </BaseDialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import BaseDialog from '@/components/common/BaseDialog.vue'
import Select from '@/components/common/Select.vue'
import Icon from '@/components/icons/Icon.vue'
import type { PurchaseProduct } from '@/types'
import {
  formatPurchasePriceCNY,
  resolvePurchasePeriod,
  splitPurchaseHighlights
} from '@/utils/purchaseDisplay'

type SubscriptionPaymentMethod = 'alipay' | 'wxpay' | 'points'

interface Props {
  show: boolean
  product: PurchaseProduct | null
  selectedMethod: SubscriptionPaymentMethod | null
  usePointsDeduction: boolean
  alipayEnabled: boolean
  wxpayEnabled: boolean
  submitting: boolean
  currentPoints?: number
}

const props = withDefaults(defineProps<Props>(), {
  currentPoints: 0
})

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'update:selectedMethod', value: SubscriptionPaymentMethod | null): void
  (e: 'update:usePointsDeduction', value: boolean): void
  (e: 'submit'): void
}>()

const { t } = useI18n()

const selectedMethodProxy = computed({
  get: () => props.selectedMethod,
  set: (value) => emit('update:selectedMethod', value as SubscriptionPaymentMethod | null)
})

const highlights = computed(() => splitPurchaseHighlights(props.product?.description))

const validityText = computed(() => {
  const period = resolvePurchasePeriod(props.product?.default_validity_days)
  if (period.key === 'days') {
    return `${period.days} ${t('purchase.dialog.validityUnitDays')}`
  }

  const labels: Record<'day' | 'week' | 'month' | 'quarter' | 'year', string> = {
    day: `1 ${t('purchase.dialog.validityUnitDays')}`,
    week: `7 ${t('purchase.dialog.validityUnitDays')}`,
    month: `30 ${t('purchase.dialog.validityUnitDays')}`,
    quarter: `90 ${t('purchase.dialog.validityUnitDays')}`,
    year: `365 ${t('purchase.dialog.validityUnitDays')}`
  }
  return labels[period.key]
})

const resetPeriodText = computed(() => {
  if (props.product?.daily_limit_usd != null) return t('purchase.dialog.resetPeriod.day')
  if (props.product?.weekly_limit_usd != null) return t('purchase.dialog.resetPeriod.week')
  if (props.product?.monthly_limit_usd != null) return t('purchase.dialog.resetPeriod.month')
  return t('purchase.dialog.notAvailable')
})

const quotaText = computed(() => {
  const quota =
    props.product?.daily_limit_usd ?? props.product?.weekly_limit_usd ?? props.product?.monthly_limit_usd ?? null
  if (quota == null) return t('purchase.dialog.notAvailable')
  return `$${quota.toFixed(2)}`
})

const pointsRequired = computed(() => props.product?.purchase_price_cny ?? 0)
const pointsShortfall = computed(() => Math.max(0, pointsRequired.value - props.currentPoints))
const canExchangeWithPoints = computed(() => pointsShortfall.value <= 0)
const pointsDeductionAmount = computed(() => Math.min(pointsRequired.value, props.currentPoints))
const cashAmountAfterDeduction = computed(() => Math.max(0, pointsRequired.value - pointsDeductionAmount.value))

const methodOptions = computed(() => [
  {
    value: 'alipay',
    label: t('purchase.methods.alipay'),
    disabled: !props.alipayEnabled
  },
  {
    value: 'wxpay',
    label: t('purchase.methods.wechat'),
    disabled: !props.wxpayEnabled
  },
  {
    value: 'points',
    label: t('purchase.methods.points'),
    disabled: !props.product
  }
])

const canSubmit = computed(() => {
  if (!props.product || !props.selectedMethod || props.submitting) return false
  if (props.selectedMethod === 'alipay') return props.alipayEnabled
  if (props.selectedMethod === 'wxpay') return props.wxpayEnabled
  return canExchangeWithPoints.value
})

const submitText = computed(() => (props.submitting ? t('common.loading') : t('purchase.dialog.submit')))

function submit() {
  if (!canSubmit.value) return
  emit('submit')
}

function toggleUsePoints(value: boolean) {
  emit('update:usePointsDeduction', value)
}
</script>

<style scoped>
.subscription-dialog {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.subscription-dialog-head {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.subscription-dialog-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.9rem;
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.18), rgba(244, 114, 182, 0.18));
  color: #111827;
}

.subscription-dialog-head-copy {
  min-width: 0;
}

.subscription-dialog-heading {
  margin: 0;
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.2;
  color: #111827;
}

.subscription-dialog-subtitle {
  margin: 0.35rem 0 0;
  font-size: 0.84rem;
  color: #6b7280;
}

.subscription-dialog-card {
  border-radius: 1.25rem;
  border: 1px solid rgba(244, 114, 182, 0.16);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(250, 250, 252, 0.96));
  padding: 1rem 1.1rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.subscription-dialog-rows {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.subscription-dialog-row {
  display: grid;
  grid-template-columns: minmax(6rem, 8rem) minmax(0, 1fr);
  gap: 0.8rem;
  align-items: start;
}

.subscription-dialog-label {
  font-size: 0.94rem;
  font-weight: 700;
  color: #111827;
}

.subscription-dialog-value {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.4rem;
  min-width: 0;
  text-align: right;
  font-size: 0.94rem;
  color: #1f2937;
}

.subscription-dialog-inline-icon {
  flex-shrink: 0;
  color: #4b5563;
}

.subscription-dialog-row-highlights {
  align-items: start;
}

.subscription-dialog-highlights {
  display: grid;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.subscription-dialog-highlight-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 0.55rem;
  text-align: right;
  font-size: 0.9rem;
  color: #4b5563;
}

.subscription-dialog-highlight-dot {
  width: 0.42rem;
  height: 0.42rem;
  margin-top: 0.42rem;
  flex-shrink: 0;
  border-radius: 9999px;
  background: linear-gradient(135deg, #f472b6, #60a5fa);
}

.subscription-dialog-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 0.9rem;
  border-top: 1px solid rgba(226, 232, 240, 0.9);
}

.subscription-dialog-total-label {
  font-size: 0.96rem;
  font-weight: 700;
  color: #111827;
}

.subscription-dialog-total-value {
  font-size: 1.7rem;
  font-weight: 800;
  color: #111827;
}

.subscription-dialog-payment {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.subscription-dialog-payment-label {
  font-size: 0.94rem;
  font-weight: 600;
  color: #6b7280;
}

.subscription-dialog-payment-controls {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.75rem;
  align-items: center;
}

.subscription-dialog-select {
  min-width: 0;
}

.subscription-dialog-submit {
  display: inline-flex;
  min-height: 3.15rem;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 0 1.1rem;
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #fb7185 0%, #60a5fa 100%);
  box-shadow: 0 18px 40px rgba(244, 114, 182, 0.2);
  transition: transform 0.18s ease, opacity 0.18s ease;
}

.subscription-dialog-submit:hover:not(:disabled) {
  transform: translateY(-1px);
}

.subscription-dialog-submit:disabled {
  cursor: not-allowed;
  opacity: 0.5;
  transform: none;
}

.subscription-dialog-points-hint {
  margin: 0;
  font-size: 0.84rem;
  color: #6b7280;
}

.subscription-dialog-deduction {
  margin-top: 0.85rem;
  padding-top: 0.85rem;
  border-top: 1px solid rgba(226, 232, 240, 0.9);
}

.subscription-dialog-deduction-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.92rem;
  font-weight: 600;
  color: #374151;
}

.subscription-dialog-deduction-hint {
  margin: 0.55rem 0 0;
  font-size: 0.84rem;
  color: #6b7280;
}

:deep(.modal-content) {
  border-radius: 1.5rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(250, 247, 250, 0.98));
}

:deep(.modal-body) {
  padding-top: 0.35rem;
}

:deep(.select-trigger) {
  min-height: 3.15rem;
  border-radius: 1rem;
  border-color: rgba(251, 113, 133, 0.3);
  background: rgba(255, 255, 255, 0.98);
}

@media (max-width: 768px) {
  .subscription-dialog-heading {
    font-size: 1.25rem;
  }

  .subscription-dialog-row {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }

  .subscription-dialog-value,
  .subscription-dialog-highlight-item {
    justify-content: flex-start;
    text-align: left;
  }

  .subscription-dialog-total {
    align-items: flex-start;
    flex-direction: column;
  }

  .subscription-dialog-payment-controls {
    grid-template-columns: 1fr;
  }

  .subscription-dialog-submit {
    width: 100%;
  }
}

:global(.dark) .subscription-dialog-icon {
  color: #f8fafc;
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.18), rgba(96, 165, 250, 0.18));
}

:global(.dark) .subscription-dialog-heading,
:global(.dark) .subscription-dialog-label,
:global(.dark) .subscription-dialog-total-label,
:global(.dark) .subscription-dialog-total-value {
  color: #f8fafc;
}

:global(.dark) .subscription-dialog-subtitle,
:global(.dark) .subscription-dialog-payment-label,
:global(.dark) .subscription-dialog-points-hint,
:global(.dark) .subscription-dialog-highlight-item {
  color: #cbd5e1;
}

:global(.dark) .subscription-dialog-card {
  border-color: rgba(244, 114, 182, 0.18);
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.85), rgba(17, 24, 39, 0.92));
}

:global(.dark) .subscription-dialog-value,
:global(.dark) .subscription-dialog-inline-icon {
  color: #e5e7eb;
}

:global(.dark) .subscription-dialog-total {
  border-top-color: rgba(71, 85, 105, 0.7);
}

:global(.dark) .modal-content {
  background: linear-gradient(180deg, rgba(17, 24, 39, 0.98), rgba(30, 41, 59, 0.98));
}

:global(.dark) .select-trigger {
  border-color: rgba(244, 114, 182, 0.2);
  background: rgba(15, 23, 42, 0.92);
}
</style>

