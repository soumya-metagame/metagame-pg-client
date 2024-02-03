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

export default function StoreRubiesCard({}: Props) {
  const [activeTab, setActiveTab] = useState("ITEMS");
  const useSocket = () => {
    const [capturedData, setCapturedData] = useState<any | null>(null);

    useEffect(() => {
      const socket = io(`${Config.sockerUrl}`);

      socket.on("paymentCapture", (data) => {
        setCapturedData(data);
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
    <div className="flex w-[320px] dark:text-white items-center justify-center">
      {capturedData ? (
        <div className="bg-gray-100 h-screen">
          <div className="bg-white p-6  md:mx-auto">
            <svg
              viewBox="0 0 24 24"
              className="text-green-600 w-16 h-16 mx-auto my-6"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <div className="text-center">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Payment Done!
              </h3>
              <p className="text-gray-600 my-2">
                Thank you for completing your secure online payment.
              </p>
              <p> Have a great day! </p>
              <div className="py-10 text-center">
                <a
                  href="#"
                  className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
                >
                  GO BACK
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
              <OfferList key={index} data={offer} />
            ))}
          </div>
        </div>
      )}
    </div>
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

function OfferList({ data }: { data: (typeof offerData)[0] }) {
  const [refId, setRefId] = useState("");
  const [transactionStatus, setTransactionStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const random = new Random();

  const [initatePaymentData, setInitatePaymentData] = useState<PaymentData>({
    userId: "1",
    customerName: "Soumya Ranjan Mohanty",
    mobileNumber: "9876543210",
    referenceId: random.integer(1000, 1000000).toString(),
    amount: "50",
    emailId: "test@gmail.com",
    returnUrl: "https://deposit.skillzlive.in/payment/1",
  });

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
    if (initatePaymentData.referenceId === "") {
      console.log("something error");
    } else {
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
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 h-[45px] rubbies-card">
        <div className="flex items-center gap-4">
          <div>
            <Image src={data.icon} height={40} width={40} alt="Ruby icon" />
          </div>
          <div className="pointer-events-none text-gray-100">{data.content}</div>
        </div>
        <button
          onClick={handleInitatePayment}
          className="buy-rubbies-btn
 text-white text-[14px] flex items-center justify-center rounded-full w-[88px] h-[28px]"
        >
          {data.price}
        </button>
      </div>
    </>
  );
}
