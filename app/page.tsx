"use client";

import GithubRepos from "@/component/common/Gitub/GithubRepos";
import GithubProfile from "@/component/common/Gitub/GithubProfile";
import { RecoilRoot } from "recoil";
import TailProperties, { cn } from "@/styles/TailProperties";

export default function Home() {
  const style: TailProperties = {
    box: "lg:px-80 md: px-4",
  };
  return (
    <main className={cn(style)}>
      <RecoilRoot>
        <GithubProfile />
        <GithubRepos className="pt-16" />
      </RecoilRoot>
    </main>
  );
}
