import FlowPaymentClient2 from './payment-client'
// 1FAF41B6-10BA-40CF-9438-4A5DL1BE01BE
async function example () {
  newInstance.generatePaymentOrder({ amount: 32000, commerceOrder: '123', email: 'josetomassilvaz@gmail.com', subject: 'xd', timeout: 10, urlConfirmation: 'http://localhost:3000/api/v1/flow/transaction-callback', urlReturn: 'http://localhost:3000/api/v1/flow/transaction-callback' })
}

example() // Call the async function
