"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { atom, RecoilState } from "recoil";

// Atom definitions
export const descDataAtom = atom<DescDataType | null>({
  key: "desc",
  default: null,
}); // descDataAtom

// Type definitions
export type DescDataType = {
  interests: InterestsDataType;
  description: string;
  projects: ProjectDataType[];
  shortcuts: ShortcutDataType[];
}; // DescInterface
export type InterestsDataType = {
  desc: string;
  topics: string[];
}; // InterestsInterface
export type ProjectDataType = {
  name: string;
  desc: string;
  url0: string;
  url1: string;
  comment: string;
}; // ProjectInterface
export type ShortcutDataType = {
  url: string;
  svg_url: string;
}; // ShortcutDataType
export type GithubDataType = {
  avatar_url: string;
  login: string;
  id: string;
  location: string;
  public_repos: string;
  followers: string;
  following: string;
}; // PresenterDataType

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

// Query Functions
export async function descDataQueryFn(setDesc: (data: DescDataType) => void) {
  return await fetch(
    `https://raw.githubusercontent.com/lif31up/lif31up.github.io/main/description.json`
  ) // Fetch lif31up github profile
    .then((response) => {
      if (!response.ok) return null; // Return null if response isn't OK
      return response.json(); // Parse JSON if successful
    })
    .then((data: DescDataType) => {
      setDesc(data);
      return data;
    });
} // descDataQueryFn:: success ? JSON : null

export async function githubDataQueryFn() {
  return await fetch(`https://api.github.com/users/lif31up`) // Fetch lif31up github profile
    .then((response) => {
      if (!response.ok) return null; // Return null if response isn't OK
      return response.json(); // Parse JSON if successful
    })
    .then((data) => {
      return data; // Return parsed data
    });
} // githubDataQueryFn:: success ? JSON : null
