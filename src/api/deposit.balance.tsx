import axios from "axios";
import { Config } from "../../config";

interface DepositParam {
    userId:string,
    clientId:string,
    currency: string;
    externalTransactionId: string;
    amount:string;
    
  }

  export const DepositBalance =  ({ data }: { data: DepositParam }) => {
    console.log("data inside the payment initiate component",data)
    return new Promise((resolve, reject) => {
        axios.post(`${Config.BaseUrl}/payment_deposit?clientId=${data.clientId}&currency=${data.currency}&amount=${data.amount}&externalTransactionId=${data.externalTransactionId}&userId=${data.userId}`, {})
        .then((result) => {
            resolve(result.data)
        })
            .catch((error) => {
                console.log("1the error", error)
                reject(error)
            })
    })
};