import { LangType } from "./LangType";

export type ProjectType = {
  id: number;
  name: string;
  description: LangType;
  img: {
    sm: string;
    md: string;
    lg: string;
  }
  alt: string;
  url:string;
  category: string[];
  technologies: string[];
  resources: {
    webSite: string,
    gitHub: string,
    figma: string
  }
}