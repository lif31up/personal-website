import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";

type SidebarDataType = { height: string };
function Sidebar({ data }: DefaultProps<SidebarDataType>) {
  if (!data) return <></>;
  const style: TailProperties = {
    box: "h-screen w-16",
    bg_border: "",
    etc: "text-white",
  };
  return (
    <section className={cn(style)} style={{ paddingTop: data.height }}>
      <h1>HELLO</h1>
    </section>
  );
}
export default Sidebar;
