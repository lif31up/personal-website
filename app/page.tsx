"use client";

import GithubRepos from "@/component/feature/Gitub/GithubRepos";
import GithubProfile from "@/component/feature/Gitub/GithubProfile";
import { RecoilRoot } from "recoil";
import TailProperties, { cn } from "@/styles/TailProperties";
import ReactQueryProvider from "@/utils/ReactQuery";

export default function Home() {
  const style: TailProperties = {
    box: "lg:px-80 md: px-4 pb-16",
  };
  return (
    <section className={cn(style)}>
      <RecoilRoot>
        <ReactQueryProvider>
          <GithubProfile className="mt-2" />
          <GithubRepos className="pt-16" />
        </ReactQueryProvider>
      </RecoilRoot>
    </section>
  );
}
