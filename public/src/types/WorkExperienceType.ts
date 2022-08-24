import { LangType } from "./LangType";

export type WorkExperienceType = {
  id: number;
  jobRole: LangType;
  company: string;
  start: string;
  theEnd: string;
  currentStatus: boolean;
  current: LangType;
  seniority: LangType;
  activities: LangType;
}