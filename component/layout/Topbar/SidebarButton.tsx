import TailProperties, { cn } from "@/styles/TailProperties";
import DefaultProps from "@/utils/DefaultProps";
import Sidebar from "@/component/layout/Topbar/Sidebar";
import { useRef, useState } from "react";

type SidebarButtonDataType = {
  height: string;
}; // SidebarButtonDataType

function SidebarButton({ data }: DefaultProps<SidebarButtonDataType>) {
  const [isActivated, setIsActivated] = useState<boolean>(false);
  const sidebarRef = useRef<any>(null);
  if (!data) return <></>;
  const uuid: string = "sidebar--0";
  const onClick = () => {
    setIsActivated(!isActivated);
    if (sidebarRef.current)
      sidebarRef.current.style.left = !isActivated ? "0" : "-100%";
  };
  return (
    <>
      <button onClick={() => onClick()}>
        <Presenter data={{ activated: isActivated }} />
      </button>{" "}
      <div
        ref={sidebarRef}
        id={uuid}
        style={{
          width: "fit-content",
          height: "fit-content",
          position: "fixed",
          top: "0",
          left: "-100%",
          zIndex: "-10",
          transition: "left 0.5s ease-in-out",
        }}
      >
        <Sidebar data={data} />
      </div>
    </>
  );
} // SidebarButton(Renderer)
export default SidebarButton;

type PresenterDataType = { activated: boolean };

function Presenter({ data }: DefaultProps<PresenterDataType>) {
  if (!data) return <></>;
  const style: TailProperties = {
    box: `w-8 h-8 bg-neutral-${data.activated ? "800" : "950"} rounded-full`,
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
} // Presenter
