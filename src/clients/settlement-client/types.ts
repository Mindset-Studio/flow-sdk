import * as z from 'zod'

export const getSettlementsPropsSchema = z.object({
  startDate: z.string(),
  endDate: z.string(),
  currency: z.string().optional()
})

export type GetSettlementsProps = z.infer<typeof getSettlementsPropsSchema>

export interface Settlement {
  id: number
  date: string
  taxId: string
  name: string
  email: string
  currency: string
  initial_balance: number
  final_balance: number
  transferred: number
  billed: number
}

export interface SettlementDetail extends Settlement {
  summary: Summary
  detail: Detail
}

export interface Summary {
  transferred: Transferred[]
  commission: Commission[]
  payment: Payment[]
  credit: Credit[]
  debit: Debit[]
  billed: Billed[]
}

export interface Transferred {
  item: string
  amount: number
  taxes: number
}

export interface Commission {
  type: string
  amount: number
  taxes: number
  total: number
}

export interface Payment {
  paymentMethod: string
  brand: string
  operations: number
  amount: number
  rate: number
  fixed: number
  commission: number
  taxes: number
  balance: number
}

export interface Credit {
  amount: number
  commission: number
  taxes: number
  balance: number
  operations: number
  type: string
}

export interface Debit {
  amount: number
  commission: number
  taxes: number
  balance: number
  operations: number
  type: string
}

export interface Billed {
  type: string
  amount: number
  taxes: number
  balance: number
}

export interface Detail {
  payment: Payment2[]
  debit: Debit2[]
  credit: Credit2[]
}

export interface Payment2 {
  trxId: number
  date: string
  concept: string
  paymentMethod: string
  amount: number
  rate: number
  commission: number
  taxes: number
  balance: number
}

export interface Debit2 {
  id: number
  date: string
  concept: string
  trxId: number
  amount: number
  commission: number
  taxes: number
  balance: number
}

export interface Credit2 {
  id: number
  date: string
  concept: string
  trxId: number
  amount: number
  commission: number
  taxes: number
  balance: number
}
