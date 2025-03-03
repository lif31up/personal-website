import DefaultProps from "@/utils/DefaultProps";
import desc from "@/public/desc.json";
import TailProperties, { cn } from "@/styles/TailProperties";
import { ReactElement } from "react";

function Interests({}) {
  return <Presenter data={desc.interests} />;
} // Interests
export default Interests;

type PresenterDataType = { desc: string; topics: string[] }; // PresenterDataType

function Presenter({ data }: DefaultProps<PresenterDataType>) {
  if (!data) return <></>;
  const nodeListOfInterestBlock: ReactElement[] = [];
  data.topics.forEach((name: string, index: number) => {
    nodeListOfInterestBlock.push(<InterestBlock data={name} key={index} />);
  });

  const style: TailProperties = {
    box: "w-full h-full lg:mt-4 mt-4",
    layout: "grid justify-items-start items-start",
    typo: "text-white",
  };
  return (
    <section className="w-full h-fit lg:px-80 px-4">
      <div className={cn(style)}>
        <h1 className="mb-2 text-white font-bold text-2xl">Interests</h1>
        <div className="lg:ml-6 ml-4 text-neutral-200">
          {nodeListOfInterestBlock}
        </div>
        <p className="mt-4 text-neutral-400 text-md">{data.desc}</p>
      </div>
    </section>
  );
} // Representer

function InterestBlock({ data }: DefaultProps<string>) {
  return (
    <li>
      <h1 className="text-md font-medium">{data}</h1>
    </li>
  );
}
