"use client";

import GithubRepos from "@/component/feature/Gitub/GithubRepos";
import GithubProfile from "@/component/feature/Gitub/GithubProfile";
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
      <section className="w-full h-fit flex items-center justify-center py-4 mt-16 text-white gap-2">
        <SVG
          data={{
            svg_url: "/profile.svg",
            width: 8,
            height: 8,
            color: "white",
            fill: "transparent",
          }}
        />
        <h1 className="text-xs">Personal Website – @lif31up powered by 2025</h1>
        <a className="text-xs" href="https://vercel.com/">
          ▼ Vercel
        </a>
      </section>
    </section>
  );
}
