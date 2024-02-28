import BaseClient from '../base-client/base'
import { type Settlement, type GetSettlementsProps, type SettlementDetail } from './types'

export  class FlowSettlementClient extends BaseClient {
  async getSettlements (props: GetSettlementsProps): Promise<Settlement[]> {
    const signature = this.signParams({ ...props, apiKey: this.apiKey })
    const query = this.generateSearchParams({ ...props, apiKey: this.apiKey, s: signature }).toString()
    const url = `${this.baseURL}/settlement/search?${query}`
    return await this.request(url)
  }

  async getSettlement (id: number): Promise<SettlementDetail> {
    const signature = this.signParams({ apiKey: this.apiKey, id })
    const query = this.generateSearchParams({ apiKey: this.apiKey, s: signature, id }).toString()
    const url = `${this.baseURL}/settlement/${id}?${query}`
    return await this.request(url)
  }
}
