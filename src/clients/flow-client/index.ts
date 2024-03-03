import { type Environments } from '../base-client/base'
import { FlowCouponClient } from '../coupon-client'
import { FlowCustomerClient } from '../customer-client'
import { FlowInvoiceClient } from '../invoice-client'
import { FlowMerchantClient } from '../merchant-client'
import { FlowPaymentClient } from '../payment-client'
import { FlowPlansClient } from '../plans-client'
import { FlowRefundClient } from '../refund-client'
import { FlowSettlementClient } from '../settlement-client'
import { FlowSubscriptionClient } from '../subscription-client'

export class Flow {
  payments: FlowPaymentClient
  refunds: FlowRefundClient
  plans: FlowPlansClient
  merchants: FlowMerchantClient
  coupons: FlowCouponClient
  invoices: FlowInvoiceClient
  settlement: FlowSettlementClient
  customers: FlowCustomerClient
  subscriptions: FlowSubscriptionClient

  constructor (apiKey: string, env: Environments, secret: string) {
    this.payments = new FlowPaymentClient(apiKey, env, secret)
    this.refunds = new FlowRefundClient(apiKey, env, secret)
    this.plans = new FlowPlansClient(apiKey, env, secret)
    this.merchants = new FlowMerchantClient(apiKey, env, secret)
    this.coupons = new FlowCouponClient(apiKey, env, secret)
    this.invoices = new FlowInvoiceClient(apiKey, env, secret)
    this.settlement = new FlowSettlementClient(apiKey, env, secret)
    this.customers = new FlowCustomerClient(apiKey, env, secret)
    this.subscriptions = new FlowSubscriptionClient(apiKey, env, secret)
  }
}
