"use client";

import TailProperties, { cn } from "@/styles/TailProperties";
import DefaultProps from "@/utils/DefaultProps";
import { AtomEffect, useRecoilState } from "recoil";
import { sidebarAtom } from "@/component/common/Sidebar/Sidebar";

function SidebarButton() {
  const [isActivated, setIsActivated] = useRecoilState<boolean>(sidebarAtom);
  const onClick = () => setIsActivated(!isActivated);

  return (
    <button onClick={() => onClick()}>
      <Presenter data={{ activated: isActivated }} />
    </button>
  );
}
export default SidebarButton;

type PresenterDataType = { activated: boolean };
function Presenter({ data }: DefaultProps<PresenterDataType>) {
  const [iconSize, strokeWidth] = [14, 3];

  const style: TailProperties = {
    box: `w-8 h-8 bg-neutral-${data?.activated ? "800" : "950"} rounded-full`,
    layout: "flex items-center justify-center",
    typo: "text-slate-300",
    etc: "shadow-base",
  };
  return (
    <div className={cn(style)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${24} ${24}`}
        width={iconSize}
        height={iconSize}
        fill={"none"}
      >
        <path
          d="M4 5L20 5"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12L20 12"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 19L20 19"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
