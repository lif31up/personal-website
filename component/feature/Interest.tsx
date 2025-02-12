import DefaultProps from "@/utils/DefaultProps";
import desc from "@/public/desc.json";
import TailProperties, { cn } from "@/styles/TailProperties";
import { ReactElement } from "react";

function Interest({}) {
  return <Presenter data={desc} />;
} // Interest
export default Interest;

type RepresenterDataType = {
  interest: string[];
}; // PresenterDataType

function Presenter({ data }: DefaultProps<RepresenterDataType>) {
  if (!data) return <></>;
  const nodeListOfInterestBlock: ReactElement[] = [];
  data.interest.forEach((name: string, index: number) => {
    nodeListOfInterestBlock.push(<InterestBlock data={name} key={index} />);
  });

  const style: TailProperties = {
    box: "w-full h-64 py-8 px-8",
    layout: "flex-col",
    typo: "text-white",
    bg_border: "rounded-md bg-neutral-950 hover:bg-neutral-900",
  };
  return (
    <section className={cn(style)}>
      <h1 className="lg:ml-2 md:ml-0 mb-2 text-white font-bold text-xl">
        Interest
      </h1>
      <div className="ml-4">{nodeListOfInterestBlock}</div>
    </section>
  );
} // Representer

function InterestBlock({ data }: DefaultProps<string>) {
  return (
    <li>
      <h1 className="text-sm">{data}</h1>
    </li>
  );
}
