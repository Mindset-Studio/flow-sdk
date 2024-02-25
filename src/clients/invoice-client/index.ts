import BaseClient from '../base-client/base'
import { type OutsidePaymentProps, type Invoice, type OverdueInvoicesProps } from './types'

export default class FlowInvoiceClient extends BaseClient {
  async getInvoice (invoiceId: string): Promise<Invoice> {
    const signature = this.signParams({ invoiceId, apiKey: this.apiKey })
    const params = this.generateSearchParams({ invoiceId, s: signature, apiKey: this.apiKey }).toString()
    return await this.request(`${this.baseURL}/invoice/get?${params}`)
  }

  async getOverDueInvoices (props: OverdueInvoicesProps): Promise<OverdueInvoicesProps> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey })
    const params = this.generateSearchParams({ ...props, s: signature, apiKey: this.apiKey }).toString()
    return await this.request(`${this.baseURL}/invoice/overDue?${params}`)
  }

  async cancelInvoice (invoiceId: string): Promise<Invoice> {
    const signature = this.signParams({ invoiceId, apiKey: this.apiKey })
    const body = this.generateSearchParams({ invoiceId, s: signature, apiKey: this.apiKey })
    return await this.request(`${this.baseURL}/invoice/cancel`, { method: 'POST', body })
  }

  async outsidePayment (props: OutsidePaymentProps): Promise<Invoice> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey })
    const body = this.generateSearchParams({ ...props, s: signature, apiKey: this.apiKey })
    return await this.request(`${this.baseURL}/invoice/outsidePayment`, { method: 'POST', body })
  }

  async retryToCollectInvoice (invoiceId: string): Promise<Invoice> {
    const signature = this.signParams({ invoiceId, apiKey: this.apiKey })
    const body = this.generateSearchParams({ invoiceId, s: signature, apiKey: this.apiKey })
    return await this.request(`${this.baseURL}/invoice/retry`, { method: 'POST', body })
  }
}
