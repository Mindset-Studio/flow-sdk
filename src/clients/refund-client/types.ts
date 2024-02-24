import * as z from 'zod'

export const refundPropsSchema = z.object({
  refundCommerceOrder: z.string(),
  receiverEmail: z.string().email(),
  amount: z.number().positive('The amount must be a positive number'),
  urlCallBack: z.string().url(),
  commerceTrxId: z.string(),
  flowTrxId: z.number()
})

export type RefundProps = z.infer<typeof refundPropsSchema>

export interface RefundResponse {
  token: string
  flowRefundOrder: string
  date: string
  status: string
  amount: string
  fee: string
}
