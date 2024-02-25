import BaseClient from '../base-client/base'
import { type EditCouponProps, type DiscountCouponProps, type DiscountResponse, type DiscountCouponsListResponse, type DiscountCouponsListProps } from './types'

export default class FlowCouponClient extends BaseClient {
  async generateDiscountCoupon (props: DiscountCouponProps): Promise<DiscountResponse> {
    const signature = this.signParams(props)
    const body = this.generateSearchParams({ ...props, s: signature })
    return await this.request(`${this.baseURL}/coupon/create`, { method: 'POST', body })
  }

  async editDiscountCoupon (props: EditCouponProps): Promise<DiscountResponse> {
    const signature = this.signParams(props)
    const body = this.generateSearchParams({ ...props, s: signature })
    return await this.request(`${this.baseURL}/coupon/edit`, { method: 'POST', body })
  }

  async deleteDiscountCoupon (couponId: string): Promise<DiscountResponse> {
    const signature = this.signParams({ couponId })
    const body = this.generateSearchParams({ couponId, s: signature })
    return await this.request(`${this.baseURL}/coupon/delete`, { method: 'POST', body })
  }

  async getDiscountCoupon (couponId: string): Promise<DiscountResponse> {
    const signature = this.signParams({ couponId })
    const params = this.generateSearchParams({ couponId, s: signature, apiKey: this.apiKey }).toString()
    return await this.request(`${this.baseURL}/coupon/get?${params}`)
  }

  async getListOfDiscountCoupons (props: DiscountCouponsListProps): Promise<DiscountCouponsListResponse> {
    const signature = this.signParams(props)
    const params = this.generateSearchParams({ ...props, s: signature, apiKey: this.apiKey }).toString()
    return await this.request(`${this.baseURL}/coupon/list?${params}`)
  }
}
