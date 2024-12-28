"use client";

import TailProperties, { cn } from "@/styles/TailProperties";
import SidebarButton from "@/component/common/Sidebar/SidebarButton";
import { RecoilRoot } from "recoil";
import Sidebar from "@/component/common/Sidebar/Sidebar";

function Navigator() {
  const style: TailProperties = {
    layout: "flex justify-left items-center gap-4",
    bg_border: "bg-slate-900 shadow-md",
    box: "w-full h-14 px-4 pb-1",
    typo: "text-white",
    etc: "z-50 top-0 left-0 fixed",
  }; // style
  return (
    <RecoilRoot>
      <div className="w-full h-14" />
      <section className={cn(style)}>
        <SidebarButton />
        <h1 className="font-bold text-sm">
          lif31up personal <br /> website
        </h1>
      </section>
      <Sidebar />
    </RecoilRoot>
  );
}
export default Navigator;
