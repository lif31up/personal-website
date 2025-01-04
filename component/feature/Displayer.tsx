"use client";

import TailProperties, { cn } from "@/styles/TailProperties";
import GithubProfile from "@/component/common/Gitub/GithubProfile";
import { RecoilRoot } from "recoil";
import Repos from "@/component/common/Gitub/Repos";
import ShortcutList from "@/component/common/ShorutcutList";

function Displayer({}) {
  const style: TailProperties = {
    box: "h-fit p-8 my-4",
    bg_border: "rounded-md",
  };
  return (
    <section className={cn(style)} style={{ width: "60rem" }}>
      <RecoilRoot>
        <GithubProfile />
        <Repos className="pt-32" />
      </RecoilRoot>
    </section>
  );
}
export default Displayer;
