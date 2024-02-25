import BaseClient from "../base-client/base";


export default class FlowCustomerClient extends BaseClient {
    async generateCustomer(props){
        const signature = this.signParams({...props, apiKey:this.apiKey})
        const body = {...props, s: signature, apiKey:this.apiKey}
        return this.request(`${this.baseURL}/customer/create`, {method:'POST', body})
    }
    async editCustomer(props){
        const signature = this.signParams({...props, apiKey:this.apiKey})
        const body = {...props, s:signature, apiKey:this.apiKey}
        return this.request(`${this.baseURL}/customer/edit`, {method:'POST', body})
    }
    async deleteCustomer(props){
        const signature = this.signParams({...props, apiKey:this.apiKey})
        const body = {...props, s:signature, apiKey:this.apiKey}
        return this.request(`${this.baseURL}/customer/delete`, {method:'POST', body})
    }
    async getClient(customerId:string){
        const signature = this.signParams({customerId, apiKey:this.apiKey})
        const params = new URLSearchParams({customerId, s:signature, apiKey:this.apiKey}).toString()
        return this.request(`${this.baseURL}/customer/get?${params}`)
    }
    async getClientsList(props){
        const signature = this.signParams({...props, apiKey:this.apiKey})
        const params = new URLSearchParams({...props, s:signature, apiKey:this.apiKey}).toString()
        return this.request(`${this.baseURL}/customer/list?${params}`)
    }
    async generateRegisterLink(props){
        const signature = this.signParams({...props, apiKey:this.apiKey})
        const body = new URLSearchParams({...props, s:signature, apiKey:this.apiKey})
        return this.request(`${this.baseURL}/customer/register`, {method:'POST',body})
    }
    async getRegisterStatus(token:string){
        const signature = this.signParams({token, apiKey:this.apiKey})
        const params = new URLSearchParams({token, s:signature, apiKey:this.apiKey}).toString()
        return this.request(`${this.baseURL}/customer/getRegisterStatus?${params}`)
    }
    async unRegisterCustomer(customerId:string){
        const signature = this.signParams({customerId, apiKey:this.apiKey})
        const params = new URLSearchParams({customerId, s:signature, apiKey:this.apiKey}).toString()
        return this.request(`${this.baseURL}/customer/unRegister?${params}`)
    }
    async chargeCustomersCreditCard(props){
        const signature = this.signParams({...props, apiKey:this.apiKey})
        const body = new URLSearchParams({...props, s:signature, apiKey:this.apiKey})
        return this.request(`${this.baseURL}/customer/charge`, {method:'POST', body})
    }
    async chargeCustomer(props){
        const signature = this.signParams({...props, apiKey:this.apiKey})
        const body = new URLSearchParams({...props, s:signature, apiKey:this.apiKey})
        return this.request(`${this.baseURL}/customer/collect`, {method:'POST', body})
    }
    async batchChargeCustomers(props){
        const signature = this.signParams({...props, apiKey:this.apiKey})
        const body = new URLSearchParams({...props, s:signature, apiKey:this.apiKey})
        return this.request(`${this.baseURL}/customer/batchCollect`, {method:'POST', body})
    }
    async getBatchChargeStatus(token:string){
        const signature = this.signParams({token, apiKey:this.apiKey})
        const params = new URLSearchParams({token, s:signature, apiKey:this.apiKey}).toString()
        return this.request(`${this.baseURL}/customer/getBatchCollectStatus?${params}`)
    }
    async reverseCharge(props){
        const signature = this.signParams({...props, apiKey:this.apiKey})
        const body = new URLSearchParams({...props, s:signature, apiKey:this.apiKey})
        return this.request(`${this.baseURL}/customer/reverseCharge`, {method:'POST', body})
    }
    async getCustomerCharges(props){
        const signature = this.signParams({...props, apiKey:this.apiKey})
        const params = new URLSearchParams({...props, s:signature, apiKey:this.apiKey}).toString()
        return this.request(`${this.baseURL}/customer/getCharges?${params}`)
    }
    async getCustomerChargeAttempts(props){
        const signature = this.signParams({...props, apiKey:this.apiKey})
        const params = new URLSearchParams({...props, s:signature, apiKey:this.apiKey}).toString()
        return this.request(`${this.baseURL}/customer/getChargeAttempts?${params}`)
    }
    async getCustomerSubscriptions(props){
        const signature = this.signParams({...props, apiKey:this.apiKey})
        const params = new URLSearchParams({...props, s:signature, apiKey:this.apiKey}).toString()
        return this.request(`${this.baseURL}/customer/getSubscriptions?${params}`)
    }
}