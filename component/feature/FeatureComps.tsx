import DefaultProps from "@/utils/DefaultProps";
import { useEffect } from "react";
import TailProperties, { cn } from "@/styles/TailProperties";
import ReusableHook from "@/utils/hook/ReusableHook";

type EffectCompData = {
  name: string;
  index: number;
};
interface EffectCompInterface extends DefaultProps<EffectCompData> {
  id: string;
  prop0: number;
  prop1: string;
}
export function EffectComp({
  id,
  prop0,
  prop1,
  data,
  className,
}: EffectCompInterface) {
  // use effect area, deps from props should be expressed as props.attribute to be seperated by states
  useEffect(() => ReusableHook(id, prop1), [prop1]);

  // pre-rendering area
  const index: string = prop0.toString();

  if (!data) return <></>;
  const tailname: TailProperties = {
    box: "w-16 h-16",
    bg_border: "bg-white",
  };
  return (
    <div className={`${cn(tailname)} ${className}`}>
      {data.name + " " + index}
    </div>
  );
} // they are to be used as hook element
