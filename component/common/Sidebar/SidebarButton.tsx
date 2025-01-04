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
      <img
        src="/star_anime.gif"
        className="mr-1"
        alt="star_anime"
        width={24}
        height={24}
      />
    </div>
  );
}
