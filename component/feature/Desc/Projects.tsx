import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";
import { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { descDataAtom } from "@/utils/ReactQuery";
import Loading from "@/component/common/Loading";

const Projects = () => <Container />;
export default Projects;

function Container() {
  const descData = useRecoilValue(descDataAtom);
  if (!descData) return <Loading />;
  return <Presenter data={descData.projects} />;
} // container

type ProjectDataType = {
  name: string;
  desc: string;
  url0: string;
  url1: string;
  comment: string;
}; // ProjectDataType

function Presenter({ data }: DefaultProps<ProjectDataType[]>) {
  if (!data) return null;
  const nodeListOfProjects: ReactElement[] = data.map(
    (element: ProjectDataType, index: number) => (
      <ProjectBlock data={{ element: element, index: index }} key={index} />
    )
  );
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

type ProjectBlockDataType = {
  index: number;
  element: ProjectDataType;
};

function ProjectBlock({ data }: DefaultProps<ProjectBlockDataType>) {
  if (!data) return null;
  const { index, element } = data;
  return (
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
}
