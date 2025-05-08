// DISABLED

import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";

type SidebarDataType = { height: string };
function Sidebar({ topic }: DefaultProps<SidebarDataType>) {
  // If data is loading or an error occurred, render nothing
  if (!topic) return <></>;
  // Styling for the Presenter container
  const style: TailProperties = {
    box: "h-screen w-16",
    bg_border: "",
    etc: "text-white",
  };
  return (
    <section className={cn(style)} style={{ paddingTop: topic.height }}>
      <h1>HELLO</h1>
    </section>
  );
}
export default Sidebar;
