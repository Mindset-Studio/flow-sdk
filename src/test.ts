import { Flow } from './clients/flow-client'

const flow = new Flow('1FAF41B6-10BA-40CF-9438-4A5DL1BE01BE', 'development', 'e60a35ceb3c6b814f1e08e039157b92ce08df9cf')
// const order = flow.payments.getPaymentOrderStatus('C79F6986C5D9374BFC8BAC96ECDE5F056B75EA3C').then(data => { console.log(data) }).catch(error => { console.log(error) })
flow.refunds.generateRefund({ amount: 32000, commerceTrxId: '123456', flowTrxId: 2062790, receiverEmail: 'josetomassilvaz@gmail.com', urlCallBack: 'https://www.google.com', refundCommerceOrder: '12346' }).then(data => { console.log(data) }).catch(error => { console.log(error) })
