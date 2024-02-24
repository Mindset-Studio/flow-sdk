import { type Environments } from '../base-client/base'
import FlowPaymentClient from '../payment-client'
import FlowPlansClient from '../plans-client'
import FlowRefundClient from '../refund-client'

export class Flow {
  payments: FlowPaymentClient
  refunds: FlowRefundClient
  plans: FlowPlansClient

  constructor (apiKey: string, env: Environments, secret: string) {
    this.payments = new FlowPaymentClient(apiKey, env, secret)
    this.refunds = new FlowRefundClient(apiKey, env, secret)
    this.plans = new FlowPlansClient(apiKey, env, secret)
  }
}
