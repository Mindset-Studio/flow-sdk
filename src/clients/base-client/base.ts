import * as CryptoJS from 'crypto-js'
import * as z from 'zod'
import { FlowHTTPError } from '../../error/FlowError'
export type Environments = 'development' | 'production'

export default abstract class BaseClient {
  protected apiKey: string
  protected env: Environments
  protected baseURL: string
  protected secret: string

  constructor (apiKey: string, env: Environments, secret: string) {
    this.apiKey = apiKey
    this.env = env
    this.baseURL = env === 'development' ? 'https://sandbox.flow.cl/api' : 'https://www.flow.cl/api'
    this.secret = secret
  }

  protected async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    const config: RequestInit = {
      ...options,
      headers
    }

    try {
      const response = await fetch(endpoint, config)
      const responseData = await response.json()
      if (!response.ok) {
        throw new FlowHTTPError(responseData?.message as string ?? 'Unknown HTTP error', responseData?.code as string ?? 'Unknown', response.url)
      }
      return responseData
    } catch (error) {
      if (error instanceof FlowHTTPError) {
        error.log()
        throw error
      } else {
        throw new Error(`Unexpected error: \n${error as string}`)
      }
    }
  }

  protected signParams (params: Record<string | number, string | number >): string {
    params = { ...params, apiKey: this.apiKey }
    const keys = Object.keys(params).sort()
    const concatenatedParams = keys.reduce((acc, key) => {
      if (key !== 's') {
        return `${acc}${key}${params[key]}`
      }
      return acc
    }, '')
    const signature = CryptoJS.HmacSHA256(concatenatedParams, this.secret)
    return CryptoJS.enc.Hex.stringify(signature)
  }

  protected parseParams<T>(params: T, schema: z.ZodType<T>): T {
    try {
      return schema.parse(params)
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error('Invalid props')
      }
      throw new Error('Unexpected error')
    }
  }

  protected generateSearchParams (params: Record<string, string | number | boolean>): URLSearchParams {
    return new URLSearchParams(params as Record<string, string>)
  }
}
