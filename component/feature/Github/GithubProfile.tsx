import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { cn } from "@/styles/TailProperties";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import ReactQueryProvider, {
  descDataAtom,
  githubDataQueryFn,
  GithubDataType,
} from "@/utils/ReactQuery";
import { DescInterface } from "@/utils/Interfaces";
import { useRecoilValue } from "recoil";
import ShortcutList from "@/component/feature/ShorutcutList";

// Type definitions
type PresenterDataType = {
  github: GithubDataType;
  desc: DescInterface;
};

// Main Function
export default function GithubProfile() {
  return (
    <ReactQueryProvider>
      <GithubProfileContainer />
    </ReactQueryProvider>
  );
}

// ContainerFunction
function GithubProfileContainer() {
  const descData = useRecoilValue(descDataAtom);
  const {
    data: github,
    isLoading: isLoadingGithub,
    isError: isErrorGithub,
  } = useQuery({
    queryFn: async () => await githubDataQueryFn(),
    queryKey: ["github-profile"],
  });
  if (isLoadingGithub || isErrorGithub || !descData) return <></>;
  return <GithubProfilePresenter data={{ github: github, desc: descData }} />;
}

// PresenterComponent
function GithubProfilePresenter({ data }: DefaultProps<PresenterDataType>) {
  if (!data) return null;
  const github: GithubDataType = data.github;
  const desc: any = data.desc;
  if (!github || !desc) return null;
  return (
    <section className={cn(GithubProfilePresenterStyle)}>
      <div className="w-fit h-fit animate__animated animate__flipInY">
        <Image
          src={github.avatar_url}
          alt="profile_img"
          width={16 * 25}
          height={16 * 25}
          className="rounded-full"
          style={{ boxShadow: "0 0 100vw 15vw rgba(240, 240, 240, 0.05)" }}
        />
      </div>
      <section title="right" className="w-full h-fit flex-col mt-2">
        <h2 className="text-md">{github.id}</h2>
        <div className="flex">
          <h1 className="text-6xl text-neutral-100">{github.login}</h1>
          <GithubLinkButton />
        </div>
        <div className="flex text-neutral-400 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={14}
            height={14}
            fill={"none"}
          >
            <path
              d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <h1>{github.location}</h1>
        </div>
        <h1 className="text-neutral-100">
          <b>Repos: </b>
          {github.public_repos}
        </h1>
        <div className="flex gap-2 text-neutral-100">
          <h1>
            <b>Follwers: </b>
            {github.followers}
          </h1>
          <h2>
            <b>Following: </b>
            {github.following}
          </h2>
        </div>
        <p className="text-neutral-400 pr-42 leading-tight mt-4 pb-5 border-b border-neutral-800">
          {desc.description}
        </p>
        <ShortcutList data={desc.shortcuts} />
      </section>
    </section>
  );
}
const GithubProfilePresenterStyle: TailProperties = {
  typo: "text-neutral-400",
  layout: "lg:flex gap-12 md:block",
  box: "w-full h-fit pt-4 pb-4 lg:pb-12",
};

const GithubLinkButton = () => {
  return (
    <button
      title="share"
      className={cn(GithubButtonStyle)}
      onClick={() => {
        navigator.clipboard.writeText(window.location.href); // copied the current location url to clipboard
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={16}
        height={16}
        fill={"none"}
      >
        <path
          d="M10 13.229C10.1416 13.4609 10.3097 13.6804 10.5042 13.8828C11.7117 15.1395 13.5522 15.336 14.9576 14.4722C15.218 14.3121 15.4634 14.1157 15.6872 13.8828L18.9266 10.5114C20.3578 9.02184 20.3578 6.60676 18.9266 5.11718C17.4953 3.6276 15.1748 3.62761 13.7435 5.11718L13.03 5.85978"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10.9703 18.14L10.2565 18.8828C8.82526 20.3724 6.50471 20.3724 5.07345 18.8828C3.64218 17.3932 3.64218 14.9782 5.07345 13.4886L8.31287 10.1172C9.74413 8.62761 12.0647 8.6276 13.4959 10.1172C13.6904 10.3195 13.8584 10.539 14 10.7708"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};
const GithubButtonStyle: TailProperties = {
  bg_border: "bg-neutral-950 hover:bg-neutral-800",
  typo: "text-white",
  etc: "rounded-full",
  box: "w-fit h-fit p-1",
};
