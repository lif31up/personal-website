"use client";

import GithubRepos from "@/component/feature/Github/GithubRepos";
import GithubProfile from "@/component/feature/Github/GithubProfile";
import { RecoilRoot } from "recoil";
import Interests from "@/component/feature/Interests";
import SVG from "@/component/common/SVG";
import Projects from "@/component/feature/Projects";

export default function Home() {
  return (
    <section>
      <RecoilRoot>
        <GithubProfile />
        <Interests />
        <Projects />
        <GithubRepos />
      </RecoilRoot>
      <section className="lg:w-full h-fit flex items-center justify-center py-4 lg:mt-16 mt-4 gap-2 lg:text-xs text-xs text-neutral-500">
        <h1>Personal Website – @lif31up powered by 2025</h1>
        <a href="https://vercel.com/">▼ Vercel</a>
      </section>
    </section>
  );
}
