"use client";

import TailProperties, { cn } from "@/styles/TailProperties";
import GithubProfile from "@/component/common/Gitub/GithubProfile";
import { RecoilRoot } from "recoil";

function Displayer({}) {
  const style: TailProperties = {
    box: "p-8",
    bg_border: "bg-neutral-900 rounded-md",
    anime_transit: "transition-all duration-1000",
  };
  const id: string = " dfdf";
  return (
    <section className={cn(style)} style={{ width: "60rem", height: "100vh" }}>
      <RecoilRoot>
        <GithubProfile />
      </RecoilRoot>
    </section>
  );
}
export default Displayer;
