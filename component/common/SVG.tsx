"use client";
import DefaultProps from "@/utils/DefaultProps";
import { useRef } from "react";
import { useSVG } from "@/utils/hook/Hooks";

export type SVGDataType = {
  svg_url: string;
  width: number;
  height: number;
  fill: string;
  color: string;
}; // SVGDataType

/* SVG Component
 * Dynamically renders an SVG file and adjusts its attributes (e.g., dimensions, colors).*/
function SVG({ topic, className }: DefaultProps<SVGDataType>) {
  // Ref for the <object> element that loads the SVG
  const elementRef = useRef<any>(null);
  // useSVG: Handles the dynamic modification of the SVG's attributes once it has loaded.
  useSVG(elementRef, topic);
  // Return nothing if no data is provided
  if (!topic) return <></>;
  // Render an <object> element, The `object` element is used to embed the SVG file
  return (
    <object
      className={className}
      ref={elementRef}
      type="image/svg+xml"
      data={topic.svg_url}
    />
  );
} // SVG()
export default SVG;
