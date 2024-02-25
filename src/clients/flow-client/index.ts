import { type Environments } from '../base-client/base'
import FlowCouponClient from '../coupon-client'
import FlowInvoiceClient from '../invoice-client'
import FlowMerchantClient from '../merchant-client'
import FlowPaymentClient from '../payment-client'
import FlowPlansClient from '../plans-client'
import FlowRefundClient from '../refund-client'

export class Flow {
  payments: FlowPaymentClient
  refunds: FlowRefundClient
  plans: FlowPlansClient
  merchants: FlowMerchantClient
  coupons: FlowCouponClient
  invoices: FlowInvoiceClient

  constructor (apiKey: string, env: Environments, secret: string) {
    this.payments = new FlowPaymentClient(apiKey, env, secret)
    this.refunds = new FlowRefundClient(apiKey, env, secret)
    this.plans = new FlowPlansClient(apiKey, env, secret)
    this.merchants = new FlowMerchantClient(apiKey, env, secret)
    this.coupons = new FlowCouponClient(apiKey, env, secret)
    this.invoices = new FlowInvoiceClient(apiKey, env, secret)
  }
}
