import { type Filter, type ListResponse } from '../../types'
import BaseClient from '../base-client/base'
import { type Payment } from '../payment-client/types'
import { type BatchChargeCustomersProps, type BatchResponse, type BatchStatus, type ChargeCustomerBaseProps, type ChargeCustomerProps, type Customer, type CustomerProps, type EditCustomerProps, type RegisterProps, type RegisterResponse, type RegisterStatus } from './types'

export class FlowCustomerClient extends BaseClient {
  async generateCustomer (props: CustomerProps): Promise<Customer> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey })
    const body = this.generateSearchParams({ ...props, s: signature, apiKey: this.apiKey })
    return await this.request(`${this.baseURL}/customer/create`, { method: 'POST', body })
  }

  async editCustomer (props: EditCustomerProps): Promise<Customer> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey })
    const body = this.generateSearchParams({ ...props, s: signature, apiKey: this.apiKey })
    return await this.request(`${this.baseURL}/customer/edit`, { method: 'POST', body })
  }

  async deleteCustomer (customerId: string): Promise<Customer> {
    const signature = this.signParams({ customerId, apiKey: this.apiKey })
    const body = this.generateSearchParams({ customerId, s: signature, apiKey: this.apiKey })
    return await this.request(`${this.baseURL}/customer/delete`, { method: 'POST', body })
  }

  async getClient (customerId: string): Promise<Customer> {
    const signature = this.signParams({ customerId, apiKey: this.apiKey })
    const params = new URLSearchParams({ customerId, s: signature, apiKey: this.apiKey }).toString()
    return await this.request(`${this.baseURL}/customer/get?${params}`)
  }

  async getCustomersList (props: Filter): Promise<ListResponse<Customer>> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey })
    const params = this.generateSearchParams({ ...props, s: signature, apiKey: this.apiKey }).toString()
    return await this.request(`${this.baseURL}/customer/list?${params}`)
  }

  async generateRegisterLink (props: RegisterProps): Promise<RegisterResponse> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey })
    const body = new URLSearchParams({ ...props, s: signature, apiKey: this.apiKey })
    return await this.request(`${this.baseURL}/customer/register`, { method: 'POST', body })
  }

  async getRegisterStatus (token: string): Promise<RegisterStatus> {
    const signature = this.signParams({ token, apiKey: this.apiKey })
    const params = new URLSearchParams({ token, s: signature, apiKey: this.apiKey }).toString()
    return await this.request(`${this.baseURL}/customer/getRegisterStatus?${params}`)
  }

  async unRegisterCustomer (customerId: string): Promise<Customer> {
    const signature = this.signParams({ customerId, apiKey: this.apiKey })
    const params = new URLSearchParams({ customerId, s: signature, apiKey: this.apiKey }).toString()
    return await this.request(`${this.baseURL}/customer/unRegister?${params}`)
  }

  async chargeCustomersCreditCard (props: ChargeCustomerBaseProps): Promise<Payment> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey })
    const body = this.generateSearchParams({ ...props, s: signature, apiKey: this.apiKey })
    return await this.request(`${this.baseURL}/customer/charge`, { method: 'POST', body })
  }

  async chargeCustomer (props: ChargeCustomerProps): Promise<unknown> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey })
    const body = this.generateSearchParams({ ...props, s: signature, apiKey: this.apiKey })
    return await this.request(`${this.baseURL}/customer/collect`, { method: 'POST', body })
  }

  async batchChargeCustomers (props: BatchChargeCustomersProps): Promise<BatchResponse> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey, batchRows: JSON.stringify(props.batchRows) })
    const body = this.generateSearchParams({ ...props, s: signature, apiKey: this.apiKey, batchRows: JSON.stringify(props.batchRows) })
    return await this.request(`${this.baseURL}/customer/batchCollect`, { method: 'POST', body })
  }

  async getBatchChargeStatus (token: string): Promise<BatchStatus> {
    const signature = this.signParams({ token, apiKey: this.apiKey })
    const params = new URLSearchParams({ token, s: signature, apiKey: this.apiKey }).toString()
    return await this.request(`${this.baseURL}/customer/getBatchCollectStatus?${params}`)
  }

  async reverseCharge (props: { commerceOrder: string, flowOrder: string }): Promise<{ status: string, message: string }> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey })
    const body = this.generateSearchParams({ ...props, s: signature, apiKey: this.apiKey })
    return await this.request(`${this.baseURL}/customer/reverseCharge`, { method: 'POST', body })
  }

  async getCustomerCharges (props: Filter & { fromDate: string }): Promise<ListResponse<unknown>> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey })
    const params = this.generateSearchParams({ ...props, s: signature, apiKey: this.apiKey }).toString()
    return await this.request(`${this.baseURL}/customer/getCharges?${params}`)
  }

  async getCustomerChargeAttempts (props: Filter & { commerceOrder: string }): Promise<ListResponse<unknown>> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey })
    const params = this.generateSearchParams({ ...props, s: signature, apiKey: this.apiKey }).toString()
    return await this.request(`${this.baseURL}/customer/getChargeAttempts?${params}`)
  }

  async getCustomerSubscriptions (props: Filter): Promise<ListResponse<unknown>> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey })
    const params = this.generateSearchParams({ ...props, s: signature, apiKey: this.apiKey }).toString()
    return await this.request(`${this.baseURL}/customer/getSubscriptions?${params}`)
  }
}
