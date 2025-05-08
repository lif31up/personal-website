"use client";

import TailProperties, { cn } from "@/styles/TailProperties";
import { RecoilRoot } from "recoil";
import DefaultProps from "@/utils/DefaultProps";
import { useRef } from "react";
import ToTopButton from "@/component/layout/Topbar/ToTopButton";
import { useTopbarChange } from "@/utils/hook/Hooks";

// ID for the topbar element, used for DOM manipulation
const topbarId: string = "topbar--0";

// ID for the topbar element, used for DOM manipulation
type TopbarDataType = { height: string }; // TopbarDataType

/* Topbar Component:
 * Displays a fixed navigation bar at the top of the page.
 * Adjusts body padding and dynamically adds a border when scrolling on small screens.*/
function Topbar({ topic }: DefaultProps<TopbarDataType>) {
  const elementRef = useRef<any>(null);
  // useEffect to handle dynamic styling and scroll behavior
  useTopbarChange(elementRef, topic);
  // Return nothing if no data is provided
  if (!topic) return <></>;
  // Styling for the topbar container
  const style: TailProperties = {
    layout: "flex items-center justify-start gap-4",
    bg_border: "bg-black lg:bg-transparent",
    box: "w-full px-4 pb-1",
  }; // style
  // Render the topbar component
  return (
    <RecoilRoot>
      <section
        className="h-fit w-full z-50 top-0 left-0 fixed shadow-black shadow-xs"
        ref={elementRef}
        id={topbarId}
      >
        <div className={cn(style)} style={{ height: topic.height }}>
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
