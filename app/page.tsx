"use client";

import GithubRepos from "@/component/feature/Gitub/GithubRepos";
import GithubProfile from "@/component/feature/Gitub/GithubProfile";
import { RecoilRoot } from "recoil";
import TailProperties, { cn } from "@/styles/TailProperties";

export default function Home() {
  const style: TailProperties = {
    box: "pb-16",
  };
  return (
    <section className={cn(style)}>
      <RecoilRoot>
        <section className="pt-4 pb-4 px-4 lg:pb-12 lg:px-80 bg-neutral-950">
          <GithubProfile />
        </section>
        <section className="pt-16 px-4 lg:px-80 bg-black">
          <GithubRepos />
        </section>
      </RecoilRoot>
    </section>
  );
}
