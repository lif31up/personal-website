"use client";

import TailProperties, { cn } from "@/styles/TailProperties";
import { atom, useRecoilValue } from "recoil";
import { useEffect } from "react";

export const sidebarAtom = atom({ default: false, key: "sidebar-atom" });

function Presenter() {
  const style: TailProperties = {
    box: `w-64 h-fit`,
    layout: `flex pl-2 py-2`,
    bg_border: "bg-black",
  }; // style
  return (
    <section className={cn(style)} style={{ paddingTop: "56px" }}>
      <div className="w-full h-full p-2 rounded-md">
        <div className="w-full h-fit grid gap-2 pt-2">
          <button className="w-full h-fit px-3 py-2 grid justify-items-start rounded-md">
            <h1 className="text-sm text-neutral-200">c-design-pattern</h1>
            <h2 className="text-xs text-neutral-400">
              description is not available
            </h2>
          </button>
          <button className="w-full h-fit px-3 py-2 grid justify-items-start rounded-md">
            <h1 className="text-sm text-neutral-200">c-design-pattern</h1>
            <h2 className="text-xs text-neutral-400">
              description is not available
            </h2>
          </button>
        </div>
      </div>
    </section>
  );
}

function Sidebar() {
  const isActivated = useRecoilValue<boolean>(sidebarAtom);
  useEffect(() => {
    if (isActivated) document.body.style.paddingLeft = "0rem";
    else document.body.style.paddingLeft = "0rem";
  }, [isActivated]);
  const style: TailProperties = {
    box: ` w-fit h-fit`,
    bg_border: "bg-black",
    etc: `fixed top-0 ${isActivated ? "left-0" : "-left-full"}`,
    anime_transit: "transition-all duration-1000",
  };
  return (
    <div className={cn(style)}>
      <Presenter />
    </div>
  );
}
export default Sidebar;
