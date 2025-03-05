import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";
import { ReactElement } from "react";
import { useQuery } from "@tanstack/react-query";
import { atom, RecoilState, useSetRecoilState } from "recoil";
import ReactQueryProvider from "@/utils/ReactQuery";
import { DescInterface } from "@/utils/Interfaces";

export const descAtom: RecoilState<any> = atom({ key: "desc", default: null });

async function descQueryFn(setDesc: any) {
  return await fetch(
    `https://raw.githubusercontent.com/lif31up/lif31up.github.io/main/description.json`
  ) // Fetch lif31up github profile
    .then((response) => {
      if (!response.ok) return null; // Return null if response isn't OK
      return response.json(); // Parse JSON if successful
    })
    .then((data: DescInterface) => {
      setDesc(data);
      return data;
    });
} // githubQueryFn:: success ? JSON : null

function Interests({}) {
  return (
    <ReactQueryProvider>
      <Container />
    </ReactQueryProvider>
  );
} // Interests
export default Interests;

function Container({}) {
  const setDesc = useSetRecoilState(descAtom);
  const {
    data: descData,
    isLoading: isLoading,
    isError: isError,
  } = useQuery({
    // Fetch function
    queryFn: async () => await descQueryFn(setDesc),
    queryKey: ["desc-query"], // Cache key for query
  }); // useQuery()
  if (isLoading || isError || !descData) return <></>;
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
} // Representer

function InterestBlock({ data }: DefaultProps<string>) {
  return (
    <li>
      <h1 className="text-md font-medium">{data}</h1>
    </li>
  );
}
