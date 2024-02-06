import axios from "axios";
import { Config } from "../../config";

interface PaymentData {
    userId:string,
    customerName:string,
    mobileNumber: string;
    referenceId: string;
    amount:string;
    emailId:string;
    returnUrl:string
  }

export const InitatePayment =  ({ data }: { data: PaymentData }) => {
    console.log("data inside the payment initiate component",data)
    return new Promise((resolve, reject) => {
        axios.post(`${Config.BaseUrl}/payment_url`, data)
        .then((result) => {
            resolve(result.data)
        })
            .catch((error) => {
                console.log("1the error", error)
                reject(error)
            })
    })
};

export const getCapturePaymentData = (paymentId:any) =>{
    return new Promise ((resolve, reject)=>{
        axios.get(`${Config.BaseUrl}/capture_payment/${paymentId}`)
        .then((result)=>{
            resolve(result.data)
        })
        .catch((error:any)=>{
            console.log("the error", error)
            reject(error)

        })
    })
};



