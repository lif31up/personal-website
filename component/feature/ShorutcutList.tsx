"use client";

import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";
import { ReactElement } from "react";
import SVG from "@/component/common/SVG";
import { ShortcutDataType } from "@/utils/ReactQuery";

// Render Component to render Shortcut
function ShortcutList({ data }: DefaultProps<ShortcutDataType[]>) {
  if (!data) return <></>;
  const nodeListOfShortcut: ReactElement[] = []; // Array to hold rendered shortcut elements
  // Generate a list of Shortcut components
  data.forEach((element, index) => {
    nodeListOfShortcut.push(<Shortcut data={element} key={index} />);
  });
  // Render the list of shortcuts inside a flex container
  return (
    <section className={"mt-3 -ml-1 flex gap-2"}>{nodeListOfShortcut}</section>
  );
} // ShortcutList(Renderer)
export default ShortcutList;

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
