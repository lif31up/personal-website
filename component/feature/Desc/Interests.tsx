import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";
import { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import ReactQueryProvider, { descDataAtom } from "@/utils/ReactQuery";

// Type definitions
type InterestTopic = string;
type PresenterDataType = {
  desc: string;
  topics: InterestTopic[];
};

// Main Component
export default function Interests({}) {
  return (
    <ReactQueryProvider>
      <InterestsContainer />
    </ReactQueryProvider>
  );
}

// Container Component (data fetcher)
function InterestsContainer({}) {
  const descData = useRecoilValue(descDataAtom);
  if (!descData) return null;
  return <InterestsPresenter topic={descData.interests} />;
}

function InterestsPresenter({ topic }: DefaultProps<PresenterDataType>) {
  if (!topic) return null;
  const nodeListOfInterestBlock: ReactElement[] = [];
  topic.topics.forEach((name: string, index: number) => {
    nodeListOfInterestBlock.push(<InterestItem topic={name} key={index} />);
  });
  return (
    <section className="w-full h-fit lg:px-80 px-4">
      <div className={cn(interestsPresenterStyles)}>
        <h1 className="mb-2 text-white font-bold text-2xl">Interests</h1>
        <div className="lg:ml-6 ml-4 text-neutral-200">
          {nodeListOfInterestBlock}
        </div>
        <p className="mt-4 text-md text-neutral-400 pr-42 leading-tight pb-5 border-b border-neutral-800">
          {topic.desc}
        </p>
      </div>
    </section>
  );
}
const interestsPresenterStyles: TailProperties = {
  box: "w-full h-full lg:mt-4 mt-4",
  layout: "grid justify-items-start items-start",
  typo: "text-white",
};

function InterestItem({ topic }: DefaultProps<InterestTopic>) {
  return (
    <li>
      <h2 className="text-md font-medium">{topic}</h2>
    </li>
  );
}
