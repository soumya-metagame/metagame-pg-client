import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CaptureDataProvider } from "@/context/capture.data.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillZ",
  description: "Welcome to SkillZ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={inter.className}>
      <CaptureDataProvider>
        {children}
      </CaptureDataProvider>

        <Navbar />
      </body>
    </html>

  );
}
