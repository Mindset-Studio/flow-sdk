import { type Discount } from '../coupon-client/types'
import { type Invoice } from '../invoice-client/types'

export interface SubscriptionProps {
  planId: string
  customerId: string
  subscription_start?: string
  couponId?: number
  trial_period_days?: number
  periods_number: number
}

export interface Subscription {
  subscriptionId: string
  planId: string
  plan_name: string
  customerId: string
  created: string
  subscription_start: string
  subscription_end: string
  period_start: string
  period_end: string
  next_invoice_date: string
  trial_period_days: number
  trial_start: string
  trial_end: string
  cancel_at_period_end: number
  cancel_at: any
  periods_number: number
  days_until_due: number
  status: number
  morose: number
  discount: SubscriptionDiscount
  invoices: Invoice[]
}

export interface SubscriptionDiscount {
  id: number
  type: string
  created: string
  start: string
  end: string
  deleted: string
  status: number
  coupon: Discount
}
