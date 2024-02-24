import * as z from 'zod'

export const paymentOrderPropsSchema = z.object({
  commerceOrder:z.string(),
  subject: z.string(),
  currency: z.string().optional(),
  amount: z.number().positive(),
  email: z.string().email(),
  paymentMethod: z.string().optional(),
  urlConfirmation: z.string().url(),
  urlReturn: z.string().url(),
  optional: z.string().optional(),
  timeout: z.number().optional().default(10),
  merchantId: z.string().optional(),
  payment_currency: z.string().optional()
})

export type PaymentOrderProps = z.infer<typeof paymentOrderPropsSchema>


export interface PaymentsListsResponse {
  total:number
  hasMore: boolean
  data: PaymentOrderStatus[]
}

export interface NewPaymentOrderResponse {
  redirectionUrl: string
  raw: RawNewPaymentOrderResponse
}
export interface RawNewPaymentOrderResponse {
  token:string
  url: string,
  flowOrder: number
}



export interface PaymentOrderStatus {
    flowOrder: number;
    commerceOrder: string;
    requestDate: string;
    status: number;
    subject: string;
    currency: string;
    amount: number;
    payer: string;
    optional: Optional;
    pending_info: PendingInfo;
    paymentData: PaymentData;
    merchantId: string;
}

export interface Optional {
    RUT: string;
    ID: string;
}

export interface PendingInfo {
    media: string;
    date: string;
}

export interface PaymentData {
    date: string | null;
    media: string | null;
    conversionDate: string | null;
    conversionRate: number | null;
    amount: number | null;
    currency: string | null;
    fee: number | null;
    balance: number | null;
    transferDate: string | null;
}

export interface ExtendedPaymentData extends PaymentData {
  mediaType: string | null;
  cardLast4Numbers: string | null;
  taxes: number | null;
  installments: number | null;
  autorizationCode: string | null;
}

export interface ExtendedPaymentOrderStatus extends PaymentOrderStatus {
  paymentData: ExtendedPaymentData;
}