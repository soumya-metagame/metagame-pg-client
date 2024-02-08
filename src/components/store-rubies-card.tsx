"use client";

import { InitatePayment, getCapturePaymentData } from "@/api/initate.payment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Random } from "random-js";
import Loader from "./Loader";
import { Result } from "postcss";
import io from "socket.io-client";
import { Config } from "../../config";
import Success from "./Success";


import {useCaptureData} from '../context/capture.data.context'
import { useSearchParams } from 'next/navigation';
import { AuthToken, getPlayer } from "@/api/auth.token";

type Props = {};

const offerData = [
  {
    icon: "/ruby.png",
    content: "180",
    price: "23",
  },
  {
    icon: "/ruby.png",
    content: "360",
    price: "45",
  },
  {
    icon: "/ruby.png",
    content: "600",
    price: "75",
  },
  {
    icon: "/ruby.png",
    content: "1200",
    price: "150",
  },
  {
    icon: "/ruby.png",
    content: "3000",
    price: "375",
  },
  {
    icon: "/ruby.png",
    content: "6000",
    price: "750",
  },
  {
    icon: "/ruby.png",
    content: "12000",
    price: "1500",
  },
  {
    icon: "/ruby.png",
    content: "24000",
    price: "3000",
  },
  {
    icon: "/ruby.png",
    content: "60000",
    price: "7500",
  },
];

export default function StoreRubiesCard({}: Props) {
  const [userId, setUserId] = useState('')
  const [player,setPlayer] = useState(null);
  console.log("console inside the auth ueseffect",userId)

  const [activeTab, setActiveTab] = useState("ITEMS");
  const [errorStatus,setErrorStatus] = useState(false)
  const { updateCapturedData } = useCaptureData();
  const searchParams = useSearchParams();
  const queryParam:any = searchParams.get('auth');
  // console.log("-----",queryParam)

  

 

  useEffect (()=>{
    // console.log("console inside the auth ueseffect empty")

    AuthToken(queryParam)
    .then((res:any)=>{
      setUserId(res.data[0].id)
      getPlayer(res.data[0].id)
    .then((res:any)=>{
      console.log(res)
      setPlayer(res)
    })
    .catch((error)=>{
      console.log("console inside the get player ueseffect",error)

    })
      console.log("console inside the auth ueseffect",res)
    })
    .catch ((error)=>{
      if(error){
        setErrorStatus(true)
      }
      console.log("console inside the auth ueseffect",error)

    })


  },[queryParam])

  const useSocket = () => {
    const [capturedData, setCapturedData] = useState<any | null>(null);

    useEffect(() => {
      const socket = io(`${Config.sockerUrl}`);

      socket.on("paymentCapture", (data) => {
        updateCapturedData(data);
        setCapturedData(data);
        localStorage.setItem('paymentData', JSON.stringify(data));

        
      });

      return () => {
        socket.disconnect();
      };
    }, []);


    return { capturedData, handleDataCapture: setCapturedData };
  };

  const { capturedData, handleDataCapture } = useSocket();

  console.log("socket data", capturedData);

  return (
    <>
    {
      errorStatus ? 
      <div className="bg-gray py-10 dark:bg-dark">
      <div className="container">
        <div className="flex items-center w-full rounded-lg border-l-[6px] border-red bg-red-light-6 px-7 py-8 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)] md:p-9">
          <div className="mr-5 flex h-[34px] w-[48px] items-center justify-center rounded-lg bg-red">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_961_15645)">
                <path
                  d="M9 0.506256C4.30313 0.506256 0.50625 4.30313 0.50625 9.00001C0.50625 13.6969 4.30313 17.5219 9 17.5219C13.6969 17.5219 17.5219 13.6969 17.5219 9.00001C17.5219 4.30313 13.6969 0.506256 9 0.506256ZM9 16.2563C5.00625 16.2563 1.77188 12.9938 1.77188 9.00001C1.77188 5.00626 5.00625 1.77188 9 1.77188C12.9938 1.77188 16.2563 5.03438 16.2563 9.02813C16.2563 12.9938 12.9938 16.2563 9 16.2563Z"
                  fill="white"
                />
                <path
                  d="M11.5875 6.38438C11.3344 6.13125 10.9406 6.13125 10.6875 6.38438L9 8.1L7.28438 6.38438C7.03125 6.13125 6.6375 6.13125 6.38438 6.38438C6.13125 6.6375 6.13125 7.03125 6.38438 7.28438L8.1 9L6.38438 10.7156C6.13125 10.9688 6.13125 11.3625 6.38438 11.6156C6.49688 11.7281 6.66563 11.8125 6.83438 11.8125C7.00313 11.8125 7.17188 11.7563 7.28438 11.6156L9 9.9L10.7156 11.6156C10.8281 11.7281 10.9969 11.8125 11.1656 11.8125C11.3344 11.8125 11.5031 11.7563 11.6156 11.6156C11.8688 11.3625 11.8688 10.9688 11.6156 10.7156L9.9 9L11.6156 7.28438C11.8406 7.03125 11.8406 6.6375 11.5875 6.38438Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
          <div>
            <h5 className="mb-3 text-base font-semibold text-[#BC1C21] ">
              Token Expired Please login and try again
            </h5>
          </div>
        </div>
      </div>
    </div>
    
    :
    <div className="flex w-[320px] dark:text-white items-center justify-center">
    <div className="w-[320px] py-2 px-1 space-y-1 grid place-content-center">
       <div className="w-full text-center py-2 font-bold text-2xl title-card">
        <p className="text-gray-100">Store</p>
      </div> 
      <div className="flex justify-center text-center bg-gradient-to-r from-[#0e0e25] via-[#20203c] h-10 to-[#2c2c49]">
        <div
          onClick={() => setActiveTab("ITEMS")}
          className={`w-full flex items-center cursor-pointer justify-center self-stretch ${
            activeTab === "ITEMS"
              ? "bg-[url('/active-tab-bg.svg')]"
              : "bg-transparent"
          }`}
        >
          <p>ITEMS</p>
        </div>
        <div
          onClick={() => setActiveTab("RUBIES")}
          className={`w-full flex items-center cursor-pointer justify-center self-stretch ${
            activeTab === "RUBIES"
              ? "bg-[url('/active-tab-bg.svg')]"
              : "bg-transparent"
          }`}
          text-gray-100
        >
          <p className="text-gray-100">RUBIES</p>
        </div>
      </div>
      <div className="space-y-1">
        {offerData.map((offer, index) => (
          <OfferList key={index} data={offer} userId={userId} player={player} />
        ))}
      </div>
    </div>
</div>
    }
    </>
  
  );
}

interface PaymentData {
  userId: string;
  customerName: string;
  mobileNumber: string;
  referenceId: string;
  amount: string;
  emailId: string;
  returnUrl: string;
}

function OfferList({ data,userId,player }:any ) {
  const random = new Random();

  const [refId, setRefId] = useState(random.integer(1000, 1000000).toString());
  const [transactionStatus, setTransactionStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  console.log("---------------player",player?.data[0].attributes.nick)
  const [initatePaymentData, setInitatePaymentData] = useState<PaymentData>({
    userId: userId,
    customerName: 'Sam Milln',
    mobileNumber: "9876543210",
    referenceId: refId ,
    amount: "50",
    emailId: '',
    returnUrl: '',
  });

  useEffect(()=>{
    setInitatePaymentData({
      ...initatePaymentData,
      userId: String(player?.data[0].attributes.id),
      emailId:player?.data[0].attributes.email,
      returnUrl: `https://deposit.skillzlive.in/payment/${refId}`,

    });
  },[player])

  

  // console.log("userId--------------",userId)

  // useEffect(()=>{
  //   if(refId !== ''){
  //     getCapturePaymentData(refId)
  //     .then((res:any)=>{
  //       console.log(res.data)
  //     })
  //   }

  // },[refId])

  const handleRedirect = (data: any) => {
    window.open(data, "_blank");
    setLoading(false);
  };

  const handleInitatePayment = async () => {
    setLoading(true);
    console.log(initatePaymentData);
   
      try {
        InitatePayment({ data: initatePaymentData }).then(async (res: any) => {
          if (res) {
            handleRedirect(res.data.dataUrl);
            console.log("refid", res.data.referenceId);
          }
        });
      } catch (error) {
        console.log("error message", error);
      
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 h-[45px] rubbies-card">
        <div className="flex items-center gap-4">
          <div>
            <Image src={data.icon} height={40} width={40} alt="Ruby icon" />
          </div>
          <div className="pointer-events-none text-gray-100">{data.content} Rubies</div>
        </div>
        <button
          onClick={handleInitatePayment}
          className="buy-rubbies-btn
 text-white text-[14px] flex items-center justify-center rounded-full w-[88px] h-[28px]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 48 48" id="rupee"><path fill="#ffff" fillRule="evenodd" d="M15 12C15 10.3431 16.3432 9 18 9L30 9C31.6569 9 33 10.3431 33 12C33 13.6569 31.6569 15 30 15C31.6569 15 33 16.3431 33 18C33 19.6569 31.6569 21 30 21H28.4876C27.6088 23.4865 25.6696 25.4706 23.212 26.4097L28.4962 34.3359C29.4152 35.7145 29.0427 37.5771 27.6641 38.4962C26.2855 39.4152 24.4229 39.0427 23.5039 37.6641L15.5039 25.6641C14.8901 24.7435 14.8329 23.5599 15.355 22.5844C15.877 21.609 16.8936 21 18 21C16.3432 21 15 19.6569 15 18C15 16.3431 16.3432 15 18 15C16.3432 15 15 13.6569 15 12ZM18 11C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13L20 13C21.852 13 23.4675 14.0074 24.3305 15.4993C24.5094 15.8087 24.5097 16.19 24.3311 16.4996C24.1525 16.8092 23.8223 17 23.4649 17H18C17.4477 17 17 17.4477 17 18C17 18.5523 17.4477 19 18 19H23.4649C23.8223 19 24.1525 19.1908 24.3311 19.5004C24.5097 19.81 24.5094 20.1913 24.3305 20.5007C23.4675 21.9926 21.852 23 20 23H18C17.6312 23 17.2923 23.203 17.1183 23.5281C16.9443 23.8533 16.9634 24.2478 17.168 24.5547L25.168 36.5547C25.4743 37.0142 26.0952 37.1384 26.5547 36.8321C27.0142 36.5257 27.1384 35.9048 26.8321 35.4453L20.7947 26.3892C20.6102 26.1125 20.5754 25.7623 20.7016 25.4547C20.8279 25.1471 21.0988 24.9224 21.4244 24.8552C24.0364 24.3156 26.1189 22.3173 26.7795 19.7507C26.8933 19.3089 27.2917 19 27.748 19H30C30.5523 19 31 18.5523 31 18C31 17.4477 30.5523 17 30 17H27.748C27.2917 17 26.8933 16.6911 26.7795 16.2493C26.6199 15.6292 26.3774 15.0422 26.0641 14.5007C25.8852 14.1913 25.8849 13.81 26.0635 13.5004C26.2421 13.1908 26.5723 13 26.9297 13H30C30.5523 13 31 12.5523 31 12C31 11.4477 30.5523 11 30 11L18 11Z" clipRule="evenodd"></path></svg>
 {data.price}
        </button>
      </div>
    </>
  );
}
