import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navigator from "@/component/common/Navigator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "next-template",
  description: "no description need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ paddingTop: "56px", height: "100vh" }}
      >
        <Navigator />
        <>{children}</>
      </body>
    </html>
  );
}
