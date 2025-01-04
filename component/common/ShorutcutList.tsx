"use client";

import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";
import { ReactElement } from "react";

import shortcuts from "@/public/shortcuts.json";

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
    box: "w-16 h-16",
    layout: "",
    bg_border: "bg-neutral-900",
    typo: "text-white",
    etc: "rounded-full",
  };
  return (
    <button onClick={onClick} className={cn(style)}>
      <img alt="svg_url" src={data.svg_url} />
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
