import { ReactNode } from "react";
import type { Metadata } from "next";
// import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

// import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Provide from "@/components/Provide";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HIRE",
  description: "A Virtual Interview Platform For Unstop, Automating and Conducting the entire interview process of a candidate within an hour, ensuring efficiency and timeliness. Get an instant detailed report of the candidate. ",
  icons: {
    icon: "/icons/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  
  return (
    <html lang="en">     
        <body className={`${inter.className} bg-dark-2`}>
          <Provide>
            {children}
            <Toaster />
          </Provide>
        </body>
    </html>
  );
}
