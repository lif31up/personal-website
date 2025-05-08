"use client";

import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";
import { ReactElement } from "react";
import SVG from "@/component/common/SVG";
import { ShortcutDataType } from "@/utils/ReactQuery";

// Main Component
export default function ShortcutList({
  topic,
}: DefaultProps<ShortcutDataType[]>) {
  if (!topic) return <></>;
  const nodeListOfShortcut: ReactElement[] = [];
  topic.forEach((element, index) => {
    nodeListOfShortcut.push(<Shortcut topic={element} key={index} />);
  });
  return (
    <section className={"mt-3 -ml-1 flex gap-2"}>{nodeListOfShortcut}</section>
  );
}

// Render Component
function Shortcut({ topic }: DefaultProps<ShortcutDataType>) {
  if (!topic) return null;
  const onClick = () => {
    window.open(topic.url);
  };
  return (
    <button onClick={onClick} className={cn(ShortcutStyle)} title={topic.url}>
      <SVG
        className="pointer-events-none"
        topic={{
          svg_url: topic.svg_url,
          width: 16,
          height: 16,
          fill: "white",
          color: "transparent",
        }}
      />
    </button>
  );
}
const ShortcutStyle: TailProperties = {
  box: "w-12 h-12",
  layout: "flex items-center justify-center",
  bg_border: "bg-neutral-950 hover:bg-neutral-900",
  typo: "text-white fill-white",
  etc: "rounded-full",
};
