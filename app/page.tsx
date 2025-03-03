"use client";

import GithubRepos from "@/component/feature/Github/GithubRepos";
import GithubProfile from "@/component/feature/Github/GithubProfile";
import { RecoilRoot } from "recoil";
import Interest from "@/component/feature/Interest";
import SVG from "@/component/common/SVG";

export default function Home() {
  return (
    <section>
      <RecoilRoot>
        <GithubProfile />
        <Interest />
        <section className="lg:pt-4 pt-8 px-4 lg:px-80 bg-black">
          <GithubRepos />
        </section>
      </RecoilRoot>
      <section className="lg:w-full h-fit flex items-center justify-center py-4 lg:mt-16 mt-4 gap-2 lg:text-xs text-xs text-neutral-500">
        <h1>Personal Website – @lif31up powered by 2025</h1>
        <a href="https://vercel.com/">▼ Vercel</a>
      </section>
    </section>
  );
}
