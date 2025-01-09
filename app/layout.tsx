import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Topbar from "@/component/layout/Topbar/Topbar";
import Popup from "@/component/common/Popup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "lif31up's Personal Website",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar data={{ height: "3.5rem" }} />
        {
          // <Popup data={{ animation: "_anime-slp-vanish-in" }} />
        }
        <>{children}</>
      </body>
    </html>
  );
}
