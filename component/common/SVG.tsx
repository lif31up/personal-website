"use client";
import DefaultProps from "@/utils/DefaultProps";
import { useEffect, useRef } from "react";

type SVGDataType = {
  svg_url: string;
  width: number;
  height: number;
  fill: string;
  color: string;
}; // SVGDataType

/* SVG Component
 * Dynamically renders an SVG file and adjusts its attributes (e.g., dimensions, colors).*/
function SVG({ data, className }: DefaultProps<SVGDataType>) {
  // Ref for the <object> element that loads the SVG
  const elementRef = useRef<any>(null);
  // useEffect: Handles the dynamic modification of the SVG's attributes once it has loaded.
  useEffect(() => {
    if (!data) return; // Exit early if no data is provided
    const element = elementRef.current; // Access the <object> DOM element
    const onLoadHandler = () => {
      const svgDocument = element.contentDocument; // Access the document of the loaded SVG
      const svgElement = svgDocument.querySelector("svg"); // Select the root <svg> element
      if (svgElement) {
        // Dynamically update SVG attributes based on `data`
        svgElement.setAttribute("width", data.width);
        svgElement.setAttribute("height", data.height);
        svgElement.setAttribute("fill", data.fill);
        svgElement.setAttribute("color", data.color);
      }
      // Clean up event listener after it has run
      return () => svgElement.removeEventListener("load", onLoadHandler);
    };
    // Add the load event listener to the <object> element
    element.addEventListener("load", onLoadHandler);
  }, []);
  // Return nothing if no data is provided
  if (!data) return <></>;
  // Render an <object> element, The `object` element is used to embed the SVG file
  return (
    <object
      className={className}
      ref={elementRef}
      type="image/svg+xml"
      data={data.svg_url}
    />
  );
} // SVG()
export default SVG;
