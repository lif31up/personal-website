"use client";

import TailProperties, { cn } from "@/styles/TailProperties";
import SidebarButton from "@/component/common/Sidebar/SidebarButton";
import { RecoilRoot } from "recoil";
import Sidebar from "@/component/common/Sidebar/Sidebar";

function Navigator() {
  const style: TailProperties = {
    layout: "flex items-center justify-between",
    bg_border: "bg-black",
    box: "w-full h-14 px-4 pb-1",
    etc: "z-50 top-0 left-0 fixed shadow",
  }; // style
  return (
    <RecoilRoot>
      <section className={cn(style)}>
        <div className="flex gap-4">
          <SidebarButton />
          <div className="flex-col gap-1">
            <h1 className="font-bold text-sm text-neutral-200">Lif31up</h1>
            <h2 className="font-medium text-xs text-neutral-400">
              Personal Website
            </h2>
          </div>
        </div>
        <img
          src="/star_anime.gif"
          className="mr-1"
          alt="star_anime"
          width={24}
          height={24}
        />
      </section>

      <Sidebar />
    </RecoilRoot>
  );
}
export default Navigator;
