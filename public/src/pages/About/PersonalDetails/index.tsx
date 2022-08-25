import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { svgs } from "../../../data/SvgList";
import { pageData } from "../../../data/PageData";

import { SubTitle } from "../../../components/SubTitle";

export const PersonalDetails = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  return (
    <C.PersonalDetails>
      <SubTitle subTitle={pageData.about.personalDetails.title[lang]} />

      <C.ContainerInfo
        mode={theme.mode.status}
        isMenuOpen={theme.isMenuOpen.status}
      >
        <div className="direction">
          <div className="info">
            {svgs.systemIcon.phone}
            <a href={`tel:${pageData.about.personalDetails.phone}`} target="_blank" rel="noopener noreferrer">
              {pageData.about.personalDetails.phone}
            </a>
          </div>
          <div className="info">
            {svgs.systemIcon.mail}
            <a href={`mailto:${pageData.about.personalDetails.email}`} target="_blank" rel="noopener noreferrer">
              {pageData.about.personalDetails.email}
            </a>
          </div>
          <div className="info">
            {svgs.systemIcon.mapPin}
            <p>{pageData.about.personalDetails.address}</p>
          </div>
        </div>
        <div className="direction">
          <div className="info">
            {svgs.systemIcon.linkedin}
            <a href={pageData.about.personalDetails.linkedin.url} target="_blank" rel="noopener noreferrer">
              {pageData.about.personalDetails.linkedin.text}
            </a>
          </div>
          <div className="info">
            {svgs.systemIcon.github}
            <a href={pageData.about.personalDetails.github.url} target="_blank" rel="noopener noreferrer">
              {pageData.about.personalDetails.github.text}
            </a>
          </div>
          <div className="info">
            {svgs.systemIcon.youtube}
            <a href={pageData.about.personalDetails.youtube.url} target="_blank" rel="noopener noreferrer">
              {pageData.about.personalDetails.youtube.text}
            </a>
          </div>
        </div>
      </C.ContainerInfo>
    </C.PersonalDetails>
  );
};
