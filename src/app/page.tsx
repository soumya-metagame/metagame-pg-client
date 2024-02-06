import StoreRubiesCard from "@/components/store-rubies-card";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#00001C]">
      <Suspense fallback={<><h1>Loading...</h1></>}>

      <StoreRubiesCard />
      </Suspense>
    </main>
  );
}
