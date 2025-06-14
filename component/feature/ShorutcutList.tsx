"use client";

import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";
import { ReactElement } from "react";
import SVG from "@/component/common/SVG";
import { ShortcutDataType } from "@/utils/ReactQuery";

// Main Component
export default function ShortcutList({
  data,
}: DefaultProps<ShortcutDataType[]>) {
  if (!data) return <></>;
  const nodeListOfShortcut: ReactElement[] = [];
  data.forEach((element, index) => {
    nodeListOfShortcut.push(<Shortcut data={element} key={index} />);
  });
  return (
    <section className={"mt-3 -ml-1 flex gap-2"}>{nodeListOfShortcut}</section>
  );
}

// Render Component
function Shortcut({ data }: DefaultProps<ShortcutDataType>) {
  if (!data) return null;
  const onClick = () => {
    window.open(data.url);
  };
  return (
    <button onClick={onClick} className={cn(ShortcutStyle)} title={data.url}>
      <SVG
        className="pointer-events-none"
        data={{
          svg_url: data.svg_url,
          width: 16,
          height: 16,
          fill: "white",
          color: "transparent",
        }}
      />
      { window.innerWidth > 1005 ? <h1 className="text-xs mb-0.5">{data.name}</h1> : <></> }
    </button>
  );
}
const ShortcutStyle: TailProperties = {
  box: "w-12 h-12 lg:w-fit lg:h-fit lg:py-1 lg:px-2",
  layout: "flex items-center justify-center lg:gap-1.5",
  bg_border: "bg-neutral-950 hover:bg-neutral-900",
  typo: "text-white fill-white",
  etc: "rounded-full",
};
