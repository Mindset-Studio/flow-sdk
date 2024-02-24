import BaseClient from '../base-client/base'
import { type ExtendedPaymentOrderStatus, type NewPaymentOrderResponse, type PaymentOrderProps, type PaymentOrderStatus, type RawNewPaymentOrderResponse, paymentOrderPropsSchema } from './types'

export default class FlowPaymentClient extends BaseClient {
  /**
 * Retrieves the status of a payment order.
 * @param {string} transactionToken - The token associated with the transaction.
 * @returns {Promise<PaymentOrderStatus>} A Promise that resolves to the status of the payment order.
 * @throws {Error} If the request fails or if the response does not contain valid payment order status data.
 */
  async getPaymentOrderStatus (transactionToken: string): Promise<PaymentOrderStatus> {
    const url = `${this.baseURL}/payment/getStatus?apiKey=${this.apiKey}&token=${String(transactionToken)}&s=${this.signParams({ token: transactionToken })}`
    return await this.request<PaymentOrderStatus>(url)
  }

  /**
 * Retrieves the extended status of a payment order.
 * @param {string} transactionToken - The token associated with the transaction.
 * @returns {Promise<ExtendedPaymentOrderStatus>} A Promise that resolves to the extended status of the payment order.
 * @throws {Error} If the request fails or if the response does not contain valid extended payment order status data.
 */
  async getExtendedPaymentOrderStatus (transactionToken: string): Promise<ExtendedPaymentOrderStatus> {
    const url = `${this.baseURL}/payment/getStatusExtended?apiKey=${this.apiKey}&token=${String(transactionToken)}&s=${this.signParams({ token: transactionToken })}`
    return await this.request<ExtendedPaymentOrderStatus>(url)
  }

  /**
 * Retrieves the extended status of a payment order by flow order.
 * @param {string} transactionToken - The token associated with the transaction.
 * @returns {Promise<ExtendedPaymentOrderStatus>} A Promise that resolves to the extended status of the payment order.
 * @throws {Error} If the request fails or if the response does not contain valid extended payment order status data.
 */
  async getPaymentOrderStatusByFlowOrder (transactionToken: string): Promise<ExtendedPaymentOrderStatus> {
    const url = `${this.baseURL}/payment/getStatusByFlowOrder?apiKey=${this.apiKey}&token=${String(transactionToken)}&s=${this.signParams({ token: transactionToken })}`
    return await this.request<ExtendedPaymentOrderStatus>(url)
  }

  /**
 * Retrieves the extended status of a payment order by flow order.
 * @param {string} flowOrder - The flow order associated with the transaction.
 * @returns {Promise<ExtendedPaymentOrderStatus>} A Promise that resolves to the extended status of the payment order.
 * @throws {Error} If the request fails or if the response does not contain valid extended payment order status data.
 */
  async getExtendedPaymentOrderStatusByFlowOrder (flowOrder: string): Promise<ExtendedPaymentOrderStatus> {
    const url = `${this.baseURL}/payment/getStatusExtendedByFlowOrder?apiKey=${this.apiKey}&flowOrder=${flowOrder}&s=${this.signParams({ flowOrder })}`
    return await this.request<ExtendedPaymentOrderStatus>(url)
  }

  /**
 * Retrieves the status of a payment order by commerce ID.
 * @param {string} commerceId - The commerce ID associated with the transaction.
 * @returns {Promise<PaymentOrderStatus>} A Promise that resolves to the status of the payment order.
 * @throws {Error} If the request fails or if the response does not contain valid payment order status data.
 */
  async getPaymentOrderStatusByCommerceId (commerceId: string): Promise<PaymentOrderStatus> {
    const url = `${this.baseURL}/payment/getStatusByCommerceId?apiKey=${this.apiKey}&commerceId=${commerceId}&s=${this.signParams({ commerceId })}`
    return await this.request<PaymentOrderStatus>(url)
  }

  /**
 * Generates a new payment order based on the provided properties.
 * @param {PaymentOrderProps} props - An object containing the properties of the payment order to be generated.
 * @param {string} props.commerceOrder - The identifier or order number associated with the commerce transaction.
 * @param {string} props.subject - A description of the subject or purpose of the payment order.
 * @param {string} [props.currency] - The currency in which the payment is to be made. (Optional)
 * @param {number} props.amount - The amount of the payment.
 * @param {string} props.email - The email address associated with the payment.
 * @param {string} [props.paymentMethod] - The preferred payment method. (Optional)
 * @param {string} props.urlConfirmation - The URL to which confirmation or notification of the payment should be sent.
 * @param {string} props.urlReturn - The URL to which the user should be redirected after completing the payment.
 * @param {string} [props.optional] - Additional optional information related to the payment order. (Optional)
 * @param {number} [props.timeout=10] - The timeout duration for the payment order in seconds. Default is 10 minutes. (Optional)
 * @param {string} [props.merchantId] - The identifier of the merchant associated with the payment. (Optional)
 * @param {string} [props.payment_currency] - The currency in which the payment is to be made, specific to the payment method. (Optional)
 * @returns {Promise<NewPaymentOrderResponse>} A Promise that resolves to the response containing the redirection URL and raw data of the new payment order.
 * @throws {Error} If the request fails or if the response does not contain valid data for generating a new payment order.
 */
  async generatePaymentOrder (props: PaymentOrderProps): Promise<NewPaymentOrderResponse> {
    const params = this.parseParams(props, paymentOrderPropsSchema)
    const signature = this.signParams(params)
    const queryString = Object.entries({ ...params, s: signature, apiKey: this.apiKey })
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&')

    const options = {
      method: 'POST',
      body: new URLSearchParams(queryString).toString()
    }
    const url = `${this.baseURL}/payment/create`
    const response = await this.request<RawNewPaymentOrderResponse>(url, options)
    return {
      redirectionUrl: `${response.url}?token=${response.token}`,
      raw: response
    }
  }
}
