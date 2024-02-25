import * as z from 'zod'

export const customerPropsSchema = z.object({
    email: z.string().email(),
    name: z.string(),
    externalId: z.string().optional()
})

export interface CustomerProps {
    email: string
    name: string
    externalId: string
}

export interface EditCustomerProps extends CustomerProps {
    customerId:string
}

export interface RegisterProps {
    customerId:string
    url_return: string
}


export interface RegisterStatus {
    status: string
    customerId: string
    creditCardType: string
    last4CardDigits: string
}

export interface ChargeCustomerBaseProps {
    customerId: string
    amount: number
    currency?: string
    commerceOrder: string
    optionals?:string
    subject:string

}



export interface ChargeCustomerProps extends ChargeCustomerBaseProps {
    urlConfirmation: string
    urlReturn: string
    paymentMethod?: number
    byEmail?: number
    forward_days_after?: number
    forward_times?: number
    ignore_auto_charging?:number
    timeout?:number

}

export interface BatchChargeCustomersProps {
    urlCallBack: string
    urlConfirmation:string
    urlReturn:string
    batchRows: BatchRow[]
    byEmail?:number
    forward_days_after?:number
    forward_times?:number
    timeout?:number
}

export interface BatchRow {
    customerId: string
    commerceOrder: string
    subject: string
    amount: number
    currency?: string
    paymentMethod?:number
    optional?:string

}


export interface Customer {
    customerId: string
    created: string
    email: string
    name: string
    pay_mode: string
    creditCardType: string,
    last4CardDigits: string,
    externalId: string
    status: string
    registerDate: string
}

export interface CustomersListResponse {
    total: number
    hasMore: boolean
    data: Customer[]
}

export interface RegisterResponse {
    token: string
    url: string
}

export interface BatchResponse {
  token: string
  receivedRows: string
  acceptedRows: string
  rejectedRows: RejectedRow[]
}

export interface RejectedRow {
  customerId: string
  commerceOrder: string
  rowNumber: number
  parameter: string
  errorCode: number
  errorMsg: string
}

export interface BatchStatus {
  token: string
  createdDate: string
  processedDate: string
  status: string
  collectRows: CollectRow[]
}

export interface CollectRow {
  commerceOrder: string
  type: string
  flowOrder: number
  url: string
  token: string
  status: string
  errorCode: number
  errorMsg: string
}


