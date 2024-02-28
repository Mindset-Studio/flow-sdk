import { type ListResponse, type Filter } from '../../types'
import BaseClient from '../base-client/base'
import { type Subscription, type SubscriptionProps } from './types'

export class FlowSubscriptionClient extends BaseClient {
  async generateSubscription (props: SubscriptionProps): Promise<Subscription> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey })
    const body = this.generateSearchParams({ ...props, s: signature, apiKey: this.apiKey })
    return await this.request(`${this.baseURL}/subscription/create`, { method: 'POST', body })
  }

  async getSubscription (subscriptionId: string): Promise<Subscription> {
    const signature = this.signParams({ subscriptionId, apiKey: this.apiKey })
    const params = this.generateSearchParams({ subscriptionId, s: signature, apiKey: this.apiKey }).toString()
    return await this.request(`${this.baseURL}/subscription/get?${params}`)
  }

  async getSubscriptions (filter: Filter): Promise<ListResponse<Subscription>> {
    const signature = this.signParams({ ...filter, apiKey: this.apiKey })
    const params = this.generateSearchParams({ ...filter, s: signature, apiKey: this.apiKey }).toString()
    return await this.request(`${this.baseURL}/subscription/list?${params}`)
  }

  async changeTrialDays ({ subscriptionId, trialPeriodDays }: { subscriptionId: string, trialPeriodDays: number }): Promise<Subscription> {
    const signature = this.signParams({ subscriptionId, trial_period_days: trialPeriodDays, apiKey: this.apiKey })
    const body = this.generateSearchParams({ subscriptionId, trial_period_days: trialPeriodDays, s: signature, apiKey: this.apiKey })
    return await this.request(`${this.baseURL}/subscription/changeTrial`, { method: 'POST', body })
  }

  async cancelSubscription ({ subscriptionId, atPeriodEnd }: { subscriptionId: string, atPeriodEnd: number }): Promise<Subscription> {
    const signature = this.signParams({ subscriptionId, at_period_end: atPeriodEnd, apiKey: this.apiKey })
    const body = this.generateSearchParams({ subscriptionId, at_period_end: atPeriodEnd, s: signature, apiKey: this.apiKey })
    return await this.request(`${this.baseURL}/subscription/cancel`, { method: 'POST', body })
  }

  async addDiscountCoupon ({ subscriptionId, couponId }: { subscriptionId: string, couponId: number }): Promise<Subscription> {
    const signature = this.signParams({ subscriptionId, couponId, apiKey: this.apiKey })
    const body = this.generateSearchParams({ subscriptionId, couponId, s: signature, apiKey: this.apiKey })
    return await this.request(`${this.baseURL}/subscription/addCoupon`, { method: 'POST', body })
  }

  async deleteDiscountCoupon (subscriptionId: string): Promise<Subscription> {
    const signature = this.signParams({ subscriptionId, apiKey: this.apiKey })
    const body = this.generateSearchParams({ subscriptionId, s: signature, apiKey: this.apiKey })
    return await this.request(`${this.baseURL}/subscription/deleteCoupon`, { method: 'POST', body })
  }
}
