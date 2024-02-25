import * as z from 'zod'

export const outsidePaymentPropsSchema = z.object({
  invoiceId: z.string(),
  date: z.string(),
  comment: z.string().optional()
})

export type OutsidePaymentProps = z.infer<typeof outsidePaymentPropsSchema>

export interface Invoice {
  id: number
  subscriptionId: string
  customerId: string
  created: string
  subject: string
  currency: string
  amount: number
  period_start: string
  period_end: string
  attemp_count: number
  attemped: number
  next_attemp_date: string
  due_date: string
  status: number
  error: number
  errorDate: string
  errorDescription: string
  items: Item[]
  payment: Payment
  outsidePayment: OutsidePayment
  paymentLink: string
  chargeAttemps: ChargeAttemp[]
}

export interface Item {
  id: number
  subject: string
  type: number
  currency: string
  amount: number
}

export interface Payment {
  flowOrder: number
  commerceOrder: string
  requestDate: string
  status: number
  subject: string
  currency: string
  amount: number
  payer: string
  optional: Optional
  pending_info: PendingInfo
  paymentData: PaymentData
  merchantId: string
}

export interface Optional {
  RUT: string
  ID: string
}

export interface PendingInfo {
  media: string
  date: string
}

export interface PaymentData {
  date: string
  media: string
  conversionDate: string
  conversionRate: number
  amount: number
  currency: string
  fee: number
  balance: number
  transferDate: string
}

export interface OutsidePayment {
  date: string
  comment: string
}

export interface ChargeAttemp {
  id: number
  date: string
  customerId: string
  invoiceId: number
  commerceOrder: string
  currency: string
  amount: number
  errorCode: number
  errorDescription: string
}

export const overdueInvoicesPropsSchema = z.object({
  start: z.number().optional(),
  limit: z.number().optional(),
  filter: z.string().optional(),
  planId: z.string()
})

export type OverdueInvoicesProps = z.infer<typeof overdueInvoicesPropsSchema>
