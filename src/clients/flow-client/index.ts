import { type Environments } from '../base-client/base'
import FlowPaymentClient from '../payment-client'
import FlowRefundClient from '../refund-client'

export class Flow {
  payments: FlowPaymentClient
  refunds: FlowRefundClient

  constructor (apiKey: string, env: Environments, secret: string) {
    this.payments = new FlowPaymentClient(apiKey, env, secret)
    this.refunds = new FlowRefundClient(apiKey, env, secret)
  }
}
