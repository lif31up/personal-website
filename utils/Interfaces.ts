export interface DescInterface {
  interests: InterestsInterface;
  description: string;
  projects: ProjectInterface[];
}

export interface InterestsInterface {
  desc: string;
  topics: string[];
}

export interface ProjectInterface {
  name: string;
  desc: string;
  url0: string;
  url1: string;
  comment: string;
}
