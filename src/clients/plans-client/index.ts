import BaseClient from '../base-client/base'
import { type SubscriptionResponse, type SubscriptionProps, type SubscriptionsOfPlanResponse, type ListPlansProps } from './types'

export default class FlowPlansClient extends BaseClient {
  async generateSubscriptionPlan (props: SubscriptionProps): Promise<SubscriptionResponse> {
    const url = `${this.baseURL}/subscription/create`
    const body = this.generateSearchParams({ ...props, apiKey: this.apiKey, s: this.signParams(props) })
    return await this.request<SubscriptionResponse>(url, { method: 'POST', body })
  }

  async getPlanDetails (planId: string): Promise<SubscriptionResponse> {
    const url = `${this.baseURL}/plans/get?apiKey=${this.apiKey}&planId=${planId}&s=${this.signParams({ planId })}`
    return await this.request<SubscriptionResponse>(url)
  }

  async editPlanDetails (props: SubscriptionProps): Promise<SubscriptionResponse> {
    const url = `${this.baseURL}/plans/edit`
    const body = this.generateSearchParams({ ...props, apiKey: this.apiKey, s: this.signParams(props) })
    return await this.request<SubscriptionResponse>(url, { method: 'POST', body })
  }

  async deletePlan (planId: string): Promise<SubscriptionResponse> {
    const url = `${this.baseURL}/plans/delete`
    const body = this.generateSearchParams({ apiKey: this.apiKey, planId, s: this.signParams({ planId }) })
    return await this.request<SubscriptionResponse>(url, { method: 'POST', body })
  }

  async listPlans (props: ListPlansProps & Record<string, string | number>): Promise<SubscriptionsOfPlanResponse> {
    const params = this.generateSearchParams(props).toString()
    const url = `${this.baseURL}/plans/list?${params}&s=${this.signParams(props)}`
    return await this.request<SubscriptionsOfPlanResponse>(url)
  }
}
