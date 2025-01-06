"use client";
import DefaultProps from "@/utils/DefaultProps";
import { useEffect, useRef } from "react";

type SVGDataType = {
  svg_url: string;
  width: number;
  height: number;
};
function SVG({ data }: DefaultProps<SVGDataType>) {
  const elementRef = useRef<any>(null);
  useEffect(() => {
    const element = elementRef.current;
    const onLoadHandler = () => {
      const svgDocument = element.contentDocument;
      const svgElement = svgDocument.querySelector("svg");
      if (svgElement) {
        svgElement.setAttribute("width", data?.width);
        svgElement.setAttribute("height", data?.height);
        svgElement.setAttribute("fill", "#FFFFFF");
        svgElement.setAttribute("color", "transparent");
      }
      return () => svgElement.removeEventListener("load", onLoadHandler);
    };
    element.addEventListener("load", onLoadHandler);
  }, []);
  return <object ref={elementRef} type="image/svg+xml" data={data?.svg_url} />;
}
export default SVG;
