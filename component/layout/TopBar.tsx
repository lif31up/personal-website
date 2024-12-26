"use client";

import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";
import { CSSProperties, useEffect } from "react";

interface TopBarProps extends DefaultProps<never> {
  height: number;
  constraint: number;
} // TopBarProps
export default function TopBar({ height, constraint, className }: TopBarProps) {
  useEffect((): void => {
    const topbar: HTMLElement | null = document.getElementById(topbarId);
    if (topbar) {
      topbar.style.height = `${height}px`;
      topbar.style.transition = "height 0.75s ease-in-out";
      window.addEventListener("scroll", (): void => {
        if (window.scrollY > 0)
          topbar.style.height = `${height - constraint}px`;
        else topbar.style.height = `${height}px`;
      }); // window
    } // if
  }, []);

  const topbarId: string = "top-bar";
  const tailname: TailProperties = {
    box: "w-full  px-4",
    bg_border: "bg-black text-slate-500",
    layout: "grid",
    etc: "fixed top-0 left-0",
    anime_transit: "transition-height",
  };
  const layer: CSSProperties = {
    width: "100%",
    height: `${height}px`,
  };
  return (
    <section
      className={`${cn(tailname)} ${className}`}
      title="top-bar"
      id={topbarId}
    ></section>
  );
} // TopBar
