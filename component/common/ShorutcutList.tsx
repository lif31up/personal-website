"use client";

import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";
import { ReactElement } from "react";

import shortcuts from "@/public/shortcuts.json";
import SVG from "@/component/common/SVG";

type ShortcutDataType = {
  url: string;
  svg_url: string;
};
function Shortcut({ data }: DefaultProps<ShortcutDataType>) {
  if (!data) return <></>;
  const onClick = () => {
    window.open(data.url);
  };
  const style: TailProperties = {
    box: "w-12 h-12",
    layout: "flex items-center justify-center",
    bg_border: "bg-neutral-950 hover:bg-neutral-900",
    typo: "text-white fill-white",
    etc: "rounded-full",
  };
  return (
    <button onClick={onClick} className={cn(style)} title={data.url}>
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
    </button>
  );
}

function ShortcutList({ className }: DefaultProps<never>) {
  const data = shortcuts.data;
  const nodeListOfShortcut: ReactElement[] = [];
  data.forEach((element, index) => {
    nodeListOfShortcut.push(<Shortcut data={element} key={index} />);
  });
  return (
    <section className={className + " flex gap-2"}>
      {nodeListOfShortcut}
    </section>
  );
}
export default ShortcutList;
