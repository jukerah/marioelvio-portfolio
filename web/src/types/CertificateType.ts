import { LangType } from "./LangType";

export type CertificateType = {
  id: number;
  certificateIssuer: string;
  year: string;
  certificate: LangType;
}