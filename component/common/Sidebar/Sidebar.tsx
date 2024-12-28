"use client";

import TailProperties, { cn } from "@/styles/TailProperties";
import { atom, useRecoilValue } from "recoil";
import { useEffect } from "react";

export const sidebarAtom = atom({ default: false, key: "sidebar-atom" });

function Presenter() {
  const style: TailProperties = {
    box: `w-80 h-screen`,
    layout: `px-4 pt-14`,
    bg_border: "bg-slate-800",
  }; // style
  return (
    <section className={cn(style)}>
      <section className="pt-4">
        <div className="grid gap-2">
          <button className="w-full h-8 bg-white"></button>
          <button className="w-full h-8 bg-white"></button>
          <button className="w-full h-8 bg-white"></button>
          <button className="w-full h-8 bg-white"></button>
        </div>
      </section>
    </section>
  );
}

function Sidebar() {
  const isActivated = useRecoilValue<boolean>(sidebarAtom);
  const id: string = "sidebar--0";
  useEffect(() => {
    if (isActivated) document.body.style.paddingLeft = "20rem";
    else document.body.style.paddingLeft = "0rem";
  }, [isActivated]);

  const style: TailProperties = {
    box: `${isActivated ? "left-0" : "-left-full"}`,
    etc: "relative transition-all duration-500",
  };
  return (
    <div className="fixed left-0 top-0">
      <div id={id} className={cn(style)}>
        <Presenter />
      </div>
    </div>
  );
}
export default Sidebar;
