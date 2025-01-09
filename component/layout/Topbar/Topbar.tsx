"use client";

import TailProperties, { cn } from "@/styles/TailProperties";
import { RecoilRoot } from "recoil";
import DefaultProps from "@/utils/DefaultProps";
import { useEffect } from "react";
import ToTopButton from "@/component/layout/Topbar/ToTopButton";

const topbarId: string = "topbar--0";

type TopbarDataType = {
  height: string;
}; // TopbarDataType

function Topbar({ data }: DefaultProps<TopbarDataType>) {
  useEffect(() => {
    if (!data) return;
    document.body.style.paddingTop = data.height;
    const element: HTMLElement | null = document.getElementById(topbarId);
    if (window.innerWidth > 600) return;
    if (element) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          element.style.borderBottom = "solid rgb(38,38,38) 1px";
        } else element.style.borderBottom = "none";
      });
    }
  }, []);
  if (!data) return <></>;
  const style: TailProperties = {
    layout: "flex items-center justify-start gap-4",
    bg_border: "bg-black",
    box: "w-full px-4 pb-1",
    etc: "",
  }; // style
  return (
    <RecoilRoot>
      <section
        className="h-fit w-full z-50 top-0 left-0 fixed shadow-black shadow-sm"
        id={topbarId}
      >
        <div className={cn(style)} style={{ height: data.height }}>
          <ToTopButton />
          <div className="flex-col gap-1">
            <h1 className="font-bold text-sm text-neutral-200">Lif31up</h1>
            <h2 className="font-medium text-xs text-neutral-400">
              Personal Website
            </h2>
          </div>
        </div>
      </section>
    </RecoilRoot>
  );
} // Topbar
export default Topbar;
