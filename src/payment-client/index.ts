import BaseClient from "../base";
import { ExtendedPaymentOrderStatus, NewPaymentOrderResponse, PaymentOrderProps, PaymentOrderStatus, RawNewPaymentOrderResponse, paymentOrderPropsSchema } from "./types";
import * as z from 'zod'
/**
 * 
 * 
 * TODO SIGNATURE ready
 */

export default class FlowPaymentClient2 extends BaseClient {

    async getPaymentOrderStatus(transactionToken:string): Promise<PaymentOrderStatus>{
        const url = `${this.baseURL}/payment/getStatus?apiKey=${this.apiKey}&token=${transactionToken}&s=${this.signParams({token:transactionToken})}`
        return await this.request<PaymentOrderStatus>(url)
    }

    async getExtendedPaymentOrderStatus(transactionToken:string): Promise<ExtendedPaymentOrderStatus>{
        const url = `${this.baseURL}/payment/getStatusExtended?apiKey=${this.apiKey}&token=${transactionToken}&s=${this.signParams({token:transactionToken})}`
        return await this.request<ExtendedPaymentOrderStatus>(url)
    }

     async getPaymentOrderStatusByFlowOrder(transactionToken:string): Promise<ExtendedPaymentOrderStatus>{
        const url = `${this.baseURL}/payment/getStatusByFlowOrder?apiKey=${this.apiKey}&token=${transactionToken}&s=${this.signParams({token:transactionToken})}`
        return await this.request<ExtendedPaymentOrderStatus>(url)
    }

    async getExtendedPaymentOrderStatusByFlowOrder(flowOrder:string): Promise<ExtendedPaymentOrderStatus>{
        const url = `${this.baseURL}/payment/getStatusExtendedByFlowOrder?apiKey=${this.apiKey}&flowOrder=${flowOrder}&s=${this.signParams({flowOrder})}`
        return await this.request<ExtendedPaymentOrderStatus>(url)
    }

    async getPaymentOrderStatusByCommerceId(commerceId:string): Promise<PaymentOrderStatus>{
        const url = `${this.baseURL}/payment/getStatusByCommerceId?apiKey=${this.apiKey}&commerceId=${commerceId}&s=${this.signParams({commerceId})}`
        return await this.request<PaymentOrderStatus>(url)
    }
    async generatePaymentOrder(props:PaymentOrderProps): Promise<NewPaymentOrderResponse>{
        const params = this.parseParams(props, paymentOrderPropsSchema)
        const signature = this.signParams(params)
        const options = {
            method:'POST',
            // body: new URLSearchParams({...params, s:signature, apiKey:this.apiKey}).toString()
        }
        const url = `${this.baseURL}/payment/create`
        const response =  await this.request<RawNewPaymentOrderResponse>(url, options)
        return {
            redirectionUrl: `${response.url}?token=${response.token}`,
            raw: response
        }
       
    }
}