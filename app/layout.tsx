import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Topbar from "@/component/layout/Topbar/Topbar";
import Popup from "@/component/common/Popup";
import ReactQueryProvider from "@/utils/ReactQuery";

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
        <ReactQueryProvider>
          <Topbar data={{ height: "3.5rem" }} />
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
