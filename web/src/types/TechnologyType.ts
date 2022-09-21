import { LangType } from "./LangType";

export type TechnologyType = {
  id: number;
  name: string;
  img: {
    primary: string;
    light: string;
    dark: string;
    alt: LangType;
  }
}