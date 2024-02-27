import * as z from 'zod'

export const discountCouponPropsSchema = z.object({
  name: z.string(),
  percent_off: z.number().min(0).max(100).optional(),
  currency: z.string().optional(),
  amount: z.number().optional(),
  duration: z.number().optional(),
  times: z.number().optional(),
  max_redemptions: z.number().optional(),
  expires: z.string().optional()
})
export type DiscountCouponProps = z.infer<typeof discountCouponPropsSchema>

export interface Discount {
  id: number
  name: number
  percent_off: number
  currency: string
  amount: number
  created: string
  duration: number
  times: number
  max_redemptions: number
  expires: string
  status: number
  redemtions: number
}
export interface EditCouponProps {
  couponId: string
  name: string
  [key: string ]: string
}

const discountCouponsListPropsSchema = z.object({
  start: z.number().optional(),
  limit: z.number().optional(),
  filter: z.string().optional(),
  status: z.number().optional()
})
export type DiscountCouponsListProps = z.infer<typeof discountCouponsListPropsSchema>
