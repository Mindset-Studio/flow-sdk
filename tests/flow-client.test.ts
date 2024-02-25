import { Flow } from '../src/clients/flow-client'
import FlowPaymentClient from '../src/clients/payment-client'
import FlowRefundClient from '../src/clients/refund-client'

describe('Testing flow client', () => {
  test('Should create a new flow client', () => {
    const flow = new Flow('test', 'development', 'data')
    expect(flow).toBeInstanceOf(Flow)
  })
})

describe('Testing flow payment client', () => {
  test('Should create a new payment client', () => {
    expect(new Flow('test', 'development', 'data').payments).toBeInstanceOf(FlowPaymentClient)
  })
})

describe('Testing flow refund client', () => {
  test('Should create a new refund client', () => {
    expect(new Flow('test', 'development', 'data').refunds).toBeInstanceOf(FlowRefundClient)
  })
})
