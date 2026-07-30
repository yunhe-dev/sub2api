import { apiClient } from './client'
import type { PayGoPresetPackage, PurchaseProduct, UpgradeQuote } from '@/types'

export async function listProducts(): Promise<PurchaseProduct[]> {
  const { data } = await apiClient.get<PurchaseProduct[]>('/purchase/products')
  return data
}

export async function listPayGoPackages(): Promise<PayGoPresetPackage[]> {
  const { data } = await apiClient.get<PayGoPresetPackage[]>('/purchase/paygo/packages')
  return data
}

export interface CreatePurchaseOrderRequest {
  group_id?: number
  product_type?: 'subscription' | 'paygo'
  amount_cny?: number
  method: 'alipay' | 'wxpay' | 'points'
  use_points?: boolean
  purchase_kind?: 'new' | 'upgrade'
  source_subscription_id?: number
  target_group_id?: number
}

export interface CreatePurchaseOrderResponse {
  trade_no: string
  provider: string
  method: string
  amount: number
  currency: string
  status: string
  product_type: 'subscription' | 'paygo'
  purchase_kind: 'new' | 'upgrade'
  url: string
  form_fields: Record<string, string>
}

export interface PurchaseOrderStatusResponse {
  trade_no: string
  status: string
  product_type: 'subscription' | 'paygo'
}

export interface PurchaseOrderDetailResponse extends PurchaseOrderStatusResponse {
  purchase_kind: 'new' | 'upgrade'
  amount: number
  currency: string
  group_name_snapshot: string
  source_group_name_snapshot: string
  target_group_name_snapshot: string
  validity_days_snapshot: number
  balance_amount_usd: number
  pricing_snapshot: string
  migrated_api_key_count: number
  created_at: string
}

export async function getUpgradeQuote(
  sourceSubscriptionId: number,
  targetGroupId: number
): Promise<UpgradeQuote> {
  const { data } = await apiClient.get<UpgradeQuote>('/purchase/upgrades/quote', {
    params: {
      source_subscription_id: sourceSubscriptionId,
      target_group_id: targetGroupId
    }
  })
  return data
}

export async function createOrder(
  payload: CreatePurchaseOrderRequest
): Promise<CreatePurchaseOrderResponse> {
  const { data } = await apiClient.post<CreatePurchaseOrderResponse>('/purchase/orders', payload)
  return data
}

export async function getOrderStatus(tradeNo: string): Promise<PurchaseOrderStatusResponse> {
  const { data } = await apiClient.get<PurchaseOrderStatusResponse>(`/purchase/orders/${tradeNo}/status`)
  return data
}

export async function getOrderDetail(tradeNo: string): Promise<PurchaseOrderDetailResponse> {
  const { data } = await apiClient.get<PurchaseOrderDetailResponse>(`/purchase/orders/${tradeNo}`)
  return data
}

export const purchaseAPI = {
  listProducts,
  listPayGoPackages,
  getUpgradeQuote,
  createOrder,
  getOrderStatus,
  getOrderDetail
}

export default purchaseAPI

