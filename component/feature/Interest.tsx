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
    box: "w-full h-full lg:mt-4 mt-0 px-4 lg:px-0",
    layout: "grid justify-items-start items-start",
    typo: "text-white",
  };
  return (
    <section className="w-full h-fit lg:pb-12 lg:px-80">
      <div className={cn(style)}>
        <h1 className="lg:ml-2 md:ml-0 mb-2 text-white font-bold text-xl">
          Interests
        </h1>
        <div className="lg:ml-6 ml-4">{nodeListOfInterestBlock}</div>
        <p className="ml-2 mt-2 text-neutral-400 text-md">
          I'm also skilled at front-end development: react. typescript. various
          stylesheet-related skills. web design pattern. nextjs and etc.
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
