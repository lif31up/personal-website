import TailProperties, { cn } from "@/styles/TailProperties";

export default function Loading() {
  const style: TailProperties = {
    box: "w-full h-full",
  };
  return (
    <div className={`${cn(style)}`}>
      <h1 className="text-neutral-100">HELLO</h1>
    </div>
  );
}
