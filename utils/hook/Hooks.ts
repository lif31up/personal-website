import { MutableRefObject, useEffect } from "react";

export function useObject(elementRef: MutableRefObject<any>, data: any) {
  useEffect(() => {
    const element = elementRef.current; // Access the <object> DOM element
    if (!element || !data) return; // Exit early if no data is provided
    const onLoadHandler = () => {
      const svgDocument = element.contentDocument; // Access the document of the loaded SVG
      if (!svgDocument) return () => console.warn("SVG document is null.");
      const svgElement = svgDocument.querySelector("svg"); // Select the root <svg> element
      if (svgElement) {
        // Dynamically update SVG attributes based on `data`
        svgElement.setAttribute("width", data.width);
        svgElement.setAttribute("height", data.height);
        svgElement.setAttribute("fill", data.fill);
        svgElement.setAttribute("color", data.color);
      } else {
        return () => console.warn("No <svg> found inside the object.");
      }
      // Clean up event listener after it has run
      return () => svgElement.removeEventListener("load", onLoadHandler);
    };
    // Add the load event listener to the <object> element
    element.addEventListener("load", onLoadHandler);
  }, [elementRef, data]);
} // useSVG()

export function useActivate(elementRef: MutableRefObject<any>, data: any) {
  useEffect(() => {
    const element = elementRef.current; // Access the <object> DOM element
    if (!data || !element) return; // Exit if no data is provided
    // Adjust body padding to account for topbar height
    document.body.style.paddingTop = data.height;
    // Add scroll event listener for small screens (width <= 600px)
    if (window.innerWidth > 1024) return;
    if (element) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 1) {
          // Add a border when scrolling down
          element.style.background = "black";
          element.style.borderBottom = "1px solid rgb(38, 38, 38)";
          // Remove the border when scrolled to the top
        } else {
          element.style.background = "transparent";
          element.style.borderBottom = "none";
        } // else
      }); // addEventListener
    } // if
  }, []); // Dependency array is empty to ensure this effect runs only once on mount
}
