"use client";

import TailProperties, { cn } from "@/styles/TailProperties";
import { RecoilRoot } from "recoil";
import DefaultProps from "@/utils/DefaultProps";
import { useEffect } from "react";
import ToTopButton from "@/component/layout/Topbar/ToTopButton";

// ID for the topbar element, used for DOM manipulation
const topbarId: string = "topbar--0";

// ID for the topbar element, used for DOM manipulation
type TopbarDataType = { height: string }; // TopbarDataType

/* Topbar Component:
 * Displays a fixed navigation bar at the top of the page.
 * Adjusts body padding and dynamically adds a border when scrolling on small screens.*/
function Topbar({ data }: DefaultProps<TopbarDataType>) {
  // useEffect to handle dynamic styling and scroll behavior
  useEffect(() => {
    if (!data) return; // Exit if no data is provided
    // Adjust body padding to account for topbar height
    document.body.style.paddingTop = data.height;
    // Get the topbar element by its ID
    const element: HTMLElement | null = document.getElementById(topbarId);
    // Add scroll event listener for small screens (width <= 600px)
    if (window.innerWidth > 600) return;
    if (element) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          // Add a border when scrolling down
          element.style.borderBottom = "solid rgb(38,38,38) 1px";
          // Remove the border when scrolled to the top
        } else element.style.borderBottom = "none";
      });
    }
  }, []); // Dependency array is empty to ensure this effect runs only once on mount
  // Return nothing if no data is provided
  if (!data) return <></>;
  // Styling for the topbar container
  const style: TailProperties = {
    layout: "flex items-center justify-start gap-4",
    bg_border: "bg-black",
    box: "w-full px-4 pb-1",
    etc: "",
  }; // style
  // Render the topbar component
  return (
    <RecoilRoot>
      <section
        className="h-fit w-full z-50 top-0 left-0 fixed shadow-black shadow-sm"
        id={topbarId}
      >
        <div className={cn(style)} style={{ height: data.height }}>
          <ToTopButton />
          <div className="flex-col gap-1">
            <h1 className="font-bold text-sm text-neutral-200">Lif31up</h1>
            <h2 className="font-medium text-xs text-neutral-400">
              Personal Website
            </h2>
          </div>
        </div>
      </section>
    </RecoilRoot>
  );
} // Topbar()
export default Topbar;
