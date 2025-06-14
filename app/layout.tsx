import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Topbar from "@/component/layout/Topbar/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "lif31up's Laboratory",
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
        <main className="xl:px-80 md:px-16 px-4">{children}</main>
      </body>
    </html>
  );
}
