import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";
import { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import ReactQueryProvider, { descDataAtom } from "@/utils/ReactQuery";

function Interests({}) {
  return (
    <ReactQueryProvider>
      <Container />
    </ReactQueryProvider>
  );
} // Interests
export default Interests;

function Container({}) {
  const descData = useRecoilValue(descDataAtom);
  if (!descData) return <></>;
  return <Presenter data={descData.interests} />;
} // Interests

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
        <p className="mt-4 text-md text-neutral-400 pr-42 leading-tight pb-5 border-b border-neutral-800">
          {data.desc}
        </p>
      </div>
    </section>
  );
} // Presenter

function InterestBlock({ data }: DefaultProps<string>) {
  return (
    <li>
      <h1 className="text-md font-medium">{data}</h1>
    </li>
  );
} // Presenter
