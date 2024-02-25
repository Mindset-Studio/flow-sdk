// import { Flow } from '../clients/flow-client'

// const flowClient = new Flow('1FAF41B6-10BA-40CF-9438-4A5DL1BE01BE', 'development', 'e60a35ceb3c6b814f1e08e039157b92ce08df9cf')
// flowClient.payments.request()

// flowClient.payments.generatePaymentOrder({ commerceOrder: `${Math.floor(Math.random() * 100000)}`, amount: 13333, email: 'josetomassilvaz@gmail.com', subject: 'test', timeout: 10, urlConfirmation: 'https://www.google.com', urlReturn: 'https://www.google.com' })
//   .then(data => {
//     console.log(data)
//     flowClient.payments.getPaymentOrderStatus(data.raw.token).then(data => { console.log(data) }).catch(error => { console.log(error) })
//   }).catch(error => { console.log(error) })
