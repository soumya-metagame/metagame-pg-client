"use client";

import { InitatePayment } from "@/api/initate.payment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Random } from 'random-js';
import Loader from "./Loader";




type Props = {};

const offerData = [
  {
    icon: "/ruby.png",
    content: "60 Rubies",
    price: "0,99$",
  },
  {
    icon: "/ruby.png",
    content: "300 Rubies",
    price: "4,99$",
  },
  {
    icon: "/ruby.png",
    content: "1500 Rubies",
    price: "24,99$",
  },
  {
    icon: "/ruby.png",
    content: "3000 Rubies",
    price: "49,99$",
  },
  {
    icon: "/ruby.png",
    content: "6000 Rubies",
    price: "99,99$",
  },
];

export default function StoreRubiesCard({ }: Props) {
  const [activeTab, setActiveTab] = useState("ITEMS");

  return (
    <div className="w-[320px] bg-[#1F1F3B] overflow-hidden rounded-md">
      <div className="w-full text-center py-4 font-bold text-2xl bg-gradient-to-r from-[#1F1F3B] to-[#2C2C49]">
        <p className="text-gray-100">Store</p>
      </div>
      <div className="flex justify-center text-center bg-gradient-to-r from-[#0e0e25] via-[#20203c] h-10 to-[#2c2c49]">
        <div
          onClick={() => setActiveTab("ITEMS")}
          className={`w-full flex items-center cursor-pointer justify-center self-stretch ${activeTab === "ITEMS"
              ? "bg-gradient-to-r from-[#002B5E] via-[#003FA3] to-[#0066FF]"
              : "bg-transparent"
            }`}
        >
          <p>Items</p>
        </div>
        <div
          onClick={() => setActiveTab("RUBIES")}
          className={`w-full flex items-center cursor-pointer justify-center self-stretch ${activeTab === "RUBIES"
              ? "bg-gradient-to-r from-[#002B5E] via-[#003FA3] to-[#0066FF] "
              : "bg-transparent"
            }`}
          text-gray-100>
          <p className="text-gray-100">Rubies</p>
        </div>
      </div>
      <div>
        {offerData.map((offer, index) => (
          <OfferList key={index} data={offer} />
        ))}
      </div>
    </div>
  );
}


interface PaymentData {
  userId: string,
  customerName: string,
  mobileNumber: string;
  referenceId: string;
  amount: string;
  emailId: string;
  returnUrl: string
}



function OfferList({ data }: { data: (typeof offerData)[0] }) {
  const [initatePaymentData, setInitatePaymentData] = useState<PaymentData>({
    userId: "1",
    customerName: "Soumya Ranjan Mohanty",
    mobileNumber: "9876543210",
    referenceId: "1111111111",
    amount: "50",
    emailId: "test@gmail.com",
    returnUrl: "quotus.co.in"
  });


  const [loading, setLoading] = useState(false)
  const [url,setUrl] = useState('')
  const random = new Random();



  const generateRandomNumber = () => new Promise((resolve) => {
    const randomNumber = random.integer(1000, 1000000);
    const randomString1 = randomNumber.toString();
  
    setInitatePaymentData((prevData) => ({
      ...prevData,
      referenceId: randomString1,
    }));
  
    // Resolve the promise with the generated random number or any other data
    resolve(randomNumber);
  });

  const handleRedirect = (data:any) =>{
    window.open(data, '_blank')
    setLoading(false)
  }




  const handleInitatePayment = async () => {
    setLoading(true);
    generateRandomNumber()
    .then((result:any)=>{
      if (!result && !initatePaymentData.referenceId && !initatePaymentData.amount && !initatePaymentData.returnUrl && !initatePaymentData.emailId) {
        console.log("something error")
      }
      else{
        try{
          InitatePayment({ data: initatePaymentData })
          .then(async(res:any)=>{
            if(res){
              handleRedirect(res.data.dataUrl)
            }
          })
        }
        catch(error){
          console.log("error message",error)
        }
      }
  
      
    })
    
    


  };

  return (
    <>
    {
      loading ? Loader :
      <div className="flex items-center justify-between px-4 border-b border-blue-400 py-2">
      
      <div className="flex items-center gap-4">
        <div>
          <Image src={data.icon} height={40} width={40} alt="Ruby icon" />
        </div>
        <div className="text-gray-100">{data.content}</div>
      </div>
      <button onClick={handleInitatePayment} className="border rounded-md w-[100px] text-gray-100">{data.price}</button>
    </div>
    }
    </>
   
    
  );
}

