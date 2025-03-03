import DefaultProps from "@/utils/DefaultProps";
import { ReactElement } from "react";
import TailProperties, { cn } from "@/styles/TailProperties";
import { useQuery } from "@tanstack/react-query";
import ReactQueryProvider from "@/utils/ReactQuery";

const GithubRepos = () => (
  <ReactQueryProvider>
    <Container />
  </ReactQueryProvider>
); // GithubRepos()
export default GithubRepos;

// Async function to fetch data from the GitHub API
async function queryFunction() {
  return await fetch(`https://api.github.com/users/lif31up/repos`) // Fetch list of repos
    .then((response) => {
      if (!response.ok) return null; // Return null if response isn't OK
      return response.json(); // Parse JSON if successful
    })
    .then((data) => {
      return data; // Return parsed data
    });
} // queryFunction:: success ? JSON : null

// Container/Main component to fetch and display GitHub repositories
function Container() {
  // Use React Query to manage data fetching state
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await queryFunction(), // Fetch function
    queryKey: ["github-repos"], // Cache key for query
  }); // useQuery()
  // If data is loading or an error occurred, render nothing
  if (isLoading || isError) return <></>;
  // Render the RepoBlockRender component with fetched data
  return <RepoBlockRender data={data} />;
} // GithubRepos(Container)

// Render Component to render RepoBlock
function RepoBlockRender({ data }: DefaultProps<RepoBlockDataType[]>) {
  // If data is loading or an error occurred, render nothing
  if (!data) return <></>;
  const nodeListOfRepoBlock: ReactElement[] = []; // List of repository components
  // Generate repository blocks for each item in data
  data.forEach((element: RepoBlockDataType, index: number) => {
    if (
      element.name === "lif31up" ||
      element.name === "lif31up.github.io" ||
      element.name === "formssafe"
    )
      return; // Skip README repositories
    nodeListOfRepoBlock.push(<RepoBlock data={element} key={index} />); // Add repository block
  });
  // Styling for the RepoBlockRender container
  const style: TailProperties = {
    box: "w-full h-fit lg:pt-4 pt-8 px-4 lg:px-80",
    layout: "grid gap-2",
  };
  return (
    <section className={cn(style)}>
      <h1 className="lg:ml-2 md:ml-0 text-white font-bold text-xl">
        Repositories
      </h1>
      <>{nodeListOfRepoBlock}</>
    </section>
  );
} // RepoBlockRender(Renderer)

type RepoBlockDataType = {
  name: string;
  svn_url: string;
  url: string;
  description: string;
  language: string;
}; // ReposBlockDataType

// Sub Component to render an individual repository block
function RepoBlock({ data }: DefaultProps<RepoBlockDataType>) {
  // If data is loading or an error occurred, render nothing
  if (!data) return <></>;
  // Styling for the Presenter container
  const style: TailProperties = {
    layout: "grid",
    box: "w-full h-fit pt-2 pb-3 lg:px-4 md:px-0",
    typo: "text-neutral-400",
    bg_border: "xl:bg-neutral-950 md:bg-transparent xl:hover:bg-neutral-900",
    etc: "rounded-md border-neutral-600 cursor-pointer",
  };
  return (
    <button
      className={cn(style)}
      onClick={() => window.open(data.svn_url)}
      title={data.url}
    >
      <div className="flex items-center gap-2 text-neutral-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={14}
          height={14}
          fill={"none"}
        >
          <path
            d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1 className="w-fit text-neutral-200 font-medium">{data.name}</h1>
      </div>
      <p className="text-sm text-left">
        {data.description ? data.description : data.url}
      </p>
      {data.language ? (
        <div className="flex items-center gap-2 mt-2">
          <div className={`w-3 h-3 rounded-full ${colorDict[data.language]}`} />
          <h1 className="text-xs text-neutral-200">{data.language}</h1>
        </div>
      ) : (
        <></>
      )}
    </button>
  );
} // ReposBlock(Presenter)

const colorDict: any = {
  Python: "bg-blue-800",
  C: "bg-gray-400",
  TypeScript: "bg-blue-600",
  "Jupyter Notebook": "bg-orange-600",
  HTML: "bg-yellow-600",
  default: "bg-gray-200",
}; // colorDict
