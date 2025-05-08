import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";
import { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { descDataAtom } from "@/utils/ReactQuery";

const Projects = () => <Container />;
export default Projects;

function Container() {
  const descData = useRecoilValue(descDataAtom);
  if (!descData) return <></>;
  return <Presenter topic={descData.projects} />;
} // container

type ProjectDataType = {
  name: string;
  desc: string;
  url0: string;
  url1: string;
  comment: string;
}; // ProjectDataType

function Presenter({ topic }: DefaultProps<ProjectDataType[]>) {
  if (!topic) return <></>;
  const nodeListOfProjects: ReactElement[] = [];
  topic.forEach((element: ProjectDataType, index: number) => {
    nodeListOfProjects.push(
      <li key={index} className="pb-2">
        <div>
          <a
            href={element.url0}
            className="text-lg font-bold _font-roboto text-blue-400 underline"
            title={element.url0}
          >
            {element.name}
          </a>
          &nbsp;
          <a
            href={element.url1}
            className="text-xs font-bold text-blue-600 underline"
            title={element.url1}
          >
            {element.desc}
          </a>
        </div>
        <p className="text-neutral-200 text-sm">{element.comment}</p>
      </li>
    );
  });
  const style: TailProperties = {
    box: "w-full h-full lg:px-0",
    layout: "grid justify-items-start items-start",
    typo: "text-white",
  };
  return (
    <section className="w-full h-fit lg:pb-8 pb-2 pt-4 lg:px-80 px-4">
      <div className={cn(style)}>
        <div className="lg:ml-6 ml-4">{nodeListOfProjects}</div>
      </div>
    </section>
  );
} // Presenter
