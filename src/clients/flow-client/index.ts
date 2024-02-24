import { type Environments } from '../../base'
import FlowPaymentClient from '../payment-client'

export class Flow {
  payments: FlowPaymentClient

  constructor (apiKey: string, env: Environments, secret: string) {
    this.payments = new FlowPaymentClient(apiKey, env, secret)
  }
}
