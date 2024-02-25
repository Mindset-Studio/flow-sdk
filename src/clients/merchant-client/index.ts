import BaseClient from '../base-client/base'
import { type AssociatedCommerceResponse, type AssociatedCommerceProps, type DeleteCommerceResponse, type AssociatedCommercesListProps, type AssociatedCommercesListResponse } from './types'

export default class FlowMerchantClient extends BaseClient {
  async generateAssociatedCommerce (props: AssociatedCommerceProps): Promise<AssociatedCommerceResponse> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey })
    const body = this.generateSearchParams({ ...props, s: signature })
    return await this.request(`${this.baseURL}/merchant/create`, { method: 'POST', body })
  }

  async editAssociatedCommerce (props: AssociatedCommerceProps): Promise<AssociatedCommerceResponse> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey })
    const body = this.generateSearchParams({ ...props, s: signature })
    return await this.request(`${this.baseURL}/merchant/edit`, { method: 'POST', body })
  }

  async deleteAssociatedCommerce (commerceId: string): Promise<DeleteCommerceResponse> {
    const signature = this.signParams({ id: commerceId, apiKey: this.apiKey })
    const body = this.generateSearchParams({ id: commerceId, s: signature })
    return await this.request(`${this.baseURL}/merchant/delete`, { method: 'POST', body })
  }

  async getAssociatedCommerce (commerceId: string): Promise<AssociatedCommerceProps> {
    const signature = this.signParams({ id: commerceId, apiKey: this.apiKey })
    const params = this.generateSearchParams({ id: commerceId, s: signature, apiKey: this.apiKey }).toString()
    return await this.request(`${this.baseURL}/merchant/get?${params}`)
  }

  async getListOfAssociatedCommerces (props: AssociatedCommercesListProps): Promise<AssociatedCommercesListResponse> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey })
    const params = this.generateSearchParams({ ...props, apiKey: this.apiKey, s: signature }).toString()
    return await this.request(`${this.baseURL}/merchant/list?${params}`)
  }
}
