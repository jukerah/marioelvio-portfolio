export type ProjectListType = {
  id: number;
  name: string;
  description: string;
  img: string;
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