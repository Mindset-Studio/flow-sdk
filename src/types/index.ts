// import * from '../clients/coupon-client/types'

export interface ListResponse<T> {
  total: number
  hasMore: number
  data: T[]
}

export interface Filter {
  start?: number
  limit?: number
  filter?: string
  status?: number
}
