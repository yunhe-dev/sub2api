export type PurchasePeriodKey = 'day' | 'week' | 'month' | 'quarter' | 'year' | 'days'

export function splitPurchaseHighlights(description?: string | null): string[] {
  return (description || '')
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean)
}

export function resolvePurchasePeriod(days?: number | null): { key: PurchasePeriodKey; days: number } {
  const normalized = Math.max(1, Math.floor(days || 0))
  if (normalized === 1) return { key: 'day', days: normalized }
  if (normalized === 7) return { key: 'week', days: normalized }
  if (normalized === 30 || normalized === 31) return { key: 'month', days: normalized }
  if (normalized === 90) return { key: 'quarter', days: normalized }
  if (normalized === 365) return { key: 'year', days: normalized }
  return { key: 'days', days: normalized }
}

export function formatPurchasePriceCNY(amount: number): string {
  return amount.toFixed(2)
}

