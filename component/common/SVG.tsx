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

function SVG({ data }: DefaultProps<SVGDataType>) {
  const elementRef = useRef<any>(null);
  useEffect(() => {
    if (!data) return;
    const element = elementRef.current;
    const onLoadHandler = () => {
      const svgDocument = element.contentDocument;
      const svgElement = svgDocument.querySelector("svg");
      if (svgElement) {
        svgElement.setAttribute("width", data.width);
        svgElement.setAttribute("height", data.height);
        svgElement.setAttribute("fill", data.fill);
        svgElement.setAttribute("color", data.color);
      }
      return () => svgElement.removeEventListener("load", onLoadHandler);
    };
    element.addEventListener("load", onLoadHandler);
  }, []);
  if (!data) return <></>;
  return <object ref={elementRef} type="image/svg+xml" data={data.svg_url} />;
} // SVG
export default SVG;
