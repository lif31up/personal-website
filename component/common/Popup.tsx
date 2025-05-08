"use client";

import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";

const popupId: string = "popup--0";

type PopupDataType = {
  animation: string;
}; // PopupDataType

function Popup({ topic }: DefaultProps<PopupDataType>) {
  if (!topic) return <></>;
  const style: TailProperties = {
    box: "mb-4 ml-2",
    typo: "text-sm",
    etc: "fixed z-50 bottom-0 left-0",
  };
  return (
    <div className={cn(style)}>
      <div
        id={popupId}
        className={`text-white bg-neutral-900 px-3 rounded-full ${topic.animation}`}
      />
    </div>
  );
}
export default Popup;

export function PopupActivate(text: string) {
  const element: HTMLElement | null = document.getElementById(popupId);
  if (element) {
    element.innerText = text;
    element.style.animationPlayState = "running";
    setTimeout(() => {
      element.style.animationPlayState = "vanishIn linear 1s paused";
    }, 4000);
  }
} // PopupActivate
