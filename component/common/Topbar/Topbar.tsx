"use client";

import TailProperties, { cn } from "@/styles/TailProperties";
import SidebarButton from "@/component/common/Topbar/SidebarButton";
import { RecoilRoot } from "recoil";
import DefaultProps from "@/utils/DefaultProps";
import { useEffect } from "react";

type TopbarDataType = {
  height: string;
}; // TopbarDataType

function Topbar({ data }: DefaultProps<TopbarDataType>) {
  useEffect(() => {
    if (!data) return;
    document.body.style.paddingTop = data.height;
  }, []);
  if (!data) return <></>;
  const style: TailProperties = {
    layout: "flex items-center justify-start gap-4",
    bg_border: "bg-black",
    box: "w-full px-4 pb-1",
    etc: "z-50 top-0 left-0 fixed shadow",
  }; // style
  return (
    <RecoilRoot>
      <section className={cn(style)} style={{ height: data.height }}>
        <SidebarButton data={data} />
        <div className="flex-col gap-1">
          <h1 className="font-bold text-sm text-neutral-200">Lif31up</h1>
          <h2 className="font-medium text-xs text-neutral-400">
            Personal Website
          </h2>
        </div>
      </section>
    </RecoilRoot>
  );
} // Topbar
export default Topbar;
