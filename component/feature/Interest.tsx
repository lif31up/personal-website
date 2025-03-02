import DefaultProps from "@/utils/DefaultProps";
import desc from "@/public/desc.json";
import TailProperties, { cn } from "@/styles/TailProperties";
import { ReactElement } from "react";

function Interest({}) {
  return <Presenter data={desc} />;
} // Interest
export default Interest;

type PresenterDataType = {
  interest: string[];
}; // PresenterDataType

function Presenter({ data }: DefaultProps<PresenterDataType>) {
  if (!data) return <></>;
  const nodeListOfInterestBlock: ReactElement[] = [];
  data.interest.forEach((name: string, index: number) => {
    nodeListOfInterestBlock.push(<InterestBlock data={name} key={index} />);
  });

  const style: TailProperties = {
    box: "w-full h-full pb-4 lg:mt-4 mt-4 lg:mb-0 mb-2 lg:px-0 border-b border-b-neutral-800",
    layout: "grid justify-items-start items-start",
    typo: "text-white",
  };
  return (
    <section className="w-full h-fit lg:pb-12 lg:px-80 px-4">
      <div className={cn(style)}>
        <h1 className="mb-2 text-white font-bold text-xl">Interests</h1>
        <div className="lg:ml-6 ml-4 text-neutral-200">
          {nodeListOfInterestBlock}
        </div>
        <p className="mt-4 text-neutral-400 text-md">
          {
            "I'm also skilled at front-end development: react. typescript. various stylesheet-related skills. web design pattern. nextjs and etc."
          }
        </p>
      </div>
    </section>
  );
} // Representer

function InterestBlock({ data }: DefaultProps<string>) {
  return (
    <li>
      <h1 className="text-md">{data}</h1>
    </li>
  );
}
