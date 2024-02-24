// import FlowPaymentClient from "./common/flow-payment-client";
import { FlowError, FlowHTTPError } from "./error/FlowError";
import FlowPaymentClient2 from "./payment-client";
//1FAF41B6-10BA-40CF-9438-4A5DL1BE01BE
async function example() {
  //apiKey: string, env:Environments, secret:string, token?:string 
  // const xd = new FlowPaymentClient('1FAF41B6-10BA-40CF-9438-4A5DL1BE01BE', 'development', 'e60a35ceb3c6b814f1e08e039157b92ce08df9cf');
  // const data = await xd.generatePaymentOrder({amount:32000, commerceOrder:'123', email:'josetomassilvaz@gmail.com', subject:'xdxdx', currency:'CLP', payment_currency:'CLP', urlConfirmation:'http://localhost:3000/api/v1/flow/transaction-callback', urlReturn:'http://localhost:3000/api/v1/flow/transaction-callback', timeout:10})
  const newInstance = new FlowPaymentClient2('1FAF41B6-10BA-40CF-9438-4A5DL1BE01BE', 'development', 'e60a35ceb3c6b814f1e08e039157b92ce08df9cf')
  newInstance.generatePaymentOrder({amount: 32000, commerceOrder:'123',email:'josetomassilvaz@gmail.com', subject:'xd', timeout:10, urlConfirmation:'http://localhost:3000/api/v1/flow/transaction-callback', urlReturn:'http://localhost:3000/api/v1/flow/transaction-callback'})
  
}

example(); // Call the async function
