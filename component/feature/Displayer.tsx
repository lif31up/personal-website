import TailProperties, { cn } from "@/styles/TailProperties";

function Displayer({}) {
  const style: TailProperties = {
    box: "w-full h-full",
    bg_border: "bg-black",
  };
  const id: string = " dfdf";
  return <section className={cn(style)}></section>;
}
export default Displayer;
