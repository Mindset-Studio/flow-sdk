import BaseClient from '../base-client/base'
import { type RefundResponse, type RefundProps, refundPropsSchema } from './types'

export default class FlowRefundClient extends BaseClient {
  /**
   * Generates a refund for a payment based on the provided properties.
   * @param {RefundProps} props - The properties of the refund to be generated.
   * @returns {Promise<RefundResponse>} A Promise that resolves to the response containing details of the generated refund.
   */
  async generateRefund (props: RefundProps): Promise<RefundResponse> {
    const params = this.parseParams(props, refundPropsSchema)
    const url = `${this.baseURL}/refund/create`
    const signature = this.signParams(params)
    const body = new URLSearchParams({ ...params, s: signature, apiKey: this.apiKey }).toString()
    return await this.request<RefundResponse>(url, { method: 'POST', body })
  }

  /**
   * Cancels a refund with the given token.
   * @param {string} token - The token of the refund to be canceled.
   * @returns {Promise<RefundResponse>} A Promise that resolves to the response containing details of the canceled refund.
   */
  async cancelRefund (token: string): Promise<RefundResponse> {
    const url = `${this.baseURL}/refund/cancel?apiKey=${this.apiKey}&token=${token}&s=${this.signParams({ token })}`
    return await this.request<RefundResponse>(url)
  }

  /**
   * Retrieves the status of a refund with the given token.
   * @param {string} token - The token of the refund to check status.
   * @returns {Promise<RefundResponse>} A Promise that resolves to the response containing the status details of the refund.
   */
  async getRefundStatus (token: string): Promise<RefundResponse> {
    const url = `${this.baseURL}/refund/getStatus?apiKey=${this.apiKey}&token=${token}&s=${this.signParams({ token })}`
    return await this.request<RefundResponse>(url)
  }
}
