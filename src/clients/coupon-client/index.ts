import { type ListResponse } from '../../types'
import BaseClient from '../base-client/base'
import { type EditCouponProps, type DiscountCouponProps, type Discount, type DiscountCouponsListProps } from './types'

export class FlowCouponClient extends BaseClient {
  async generateDiscountCoupon (props: DiscountCouponProps): Promise<Discount> {
    const signature = this.signParams(props)
    const body = this.generateSearchParams({ ...props, s: signature })
    return await this.request(`${this.baseURL}/coupon/create`, { method: 'POST', body })
  }

  async editDiscountCoupon (props: EditCouponProps): Promise<Discount> {
    const signature = this.signParams(props)
    const body = this.generateSearchParams({ ...props, s: signature })
    return await this.request(`${this.baseURL}/coupon/edit`, { method: 'POST', body })
  }

  async deleteDiscountCoupon (couponId: string): Promise<Discount> {
    const signature = this.signParams({ couponId })
    const body = this.generateSearchParams({ couponId, s: signature })
    return await this.request(`${this.baseURL}/coupon/delete`, { method: 'POST', body })
  }

  async getDiscountCoupon (couponId: string): Promise<Discount> {
    const signature = this.signParams({ couponId })
    const params = this.generateSearchParams({ couponId, s: signature, apiKey: this.apiKey }).toString()
    return await this.request(`${this.baseURL}/coupon/get?${params}`)
  }

  async getListOfDiscountCoupons (props: DiscountCouponsListProps): Promise<ListResponse<Discount>> {
    const signature = this.signParams(props)
    const params = this.generateSearchParams({ ...props, s: signature, apiKey: this.apiKey }).toString()
    return await this.request(`${this.baseURL}/coupon/list?${params}`)
  }
}
