"use client";

import GithubRepos from "@/component/feature/Gitub/GithubRepos";
import GithubProfile from "@/component/feature/Gitub/GithubProfile";
import { RecoilRoot } from "recoil";
import TailProperties, { cn } from "@/styles/TailProperties";
import Interest from "@/component/feature/Interest";

export default function Home() {
  const style: TailProperties = {
    box: "pb-16",
  };
  return (
    <section className={cn(style)}>
      <RecoilRoot>
        <GithubProfile />
        <Interest />
        <section className="lg:pt-4 pt-8 px-4 lg:px-80 bg-black">
          <GithubRepos />
        </section>
      </RecoilRoot>
    </section>
  );
}
