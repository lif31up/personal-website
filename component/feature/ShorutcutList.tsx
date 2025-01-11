"use client";

import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";
import { ReactElement } from "react";

import shortcuts from "@/public/shortcuts.json";
import SVG from "@/component/common/SVG";

// Render Component to render Shortcut
function ShortcutList({ className }: DefaultProps<never>) {
  const data = shortcuts.data; // Access shortcut data from @/public/shortcuts.json
  const nodeListOfShortcut: ReactElement[] = []; // Array to hold rendered shortcut elements
  // Generate a list of Shortcut components
  data.forEach((element, index) => {
    nodeListOfShortcut.push(<Shortcut data={element} key={index} />);
  });
  // Render the list of shortcuts inside a flex container
  return (
    <section className={className + " flex gap-2"}>
      {nodeListOfShortcut}
    </section>
  );
} // ShortcutList(Renderer)
export default ShortcutList;

type ShortcutDataType = {
  url: string;
  svg_url: string;
}; // ShortcutDataType

// Sub Component to render an individual Shortcut
function Shortcut({ data }: DefaultProps<ShortcutDataType>) {
  // Return nothing if no data is provided
  if (!data) return <></>;
  /* onClick Handler:
   * Opens the URL in a new browser tab when the button is clicked.*/
  const onClick = () => {
    window.open(data.url);
  }; // onClick()
  // Styling for the button
  const style: TailProperties = {
    box: "w-12 h-12",
    layout: "flex items-center justify-center",
    bg_border: "bg-neutral-950 hover:bg-neutral-900",
    typo: "text-white fill-white",
    etc: "rounded-full",
  };
  // Render the button with an SVG icon
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
} // Shortcut()
