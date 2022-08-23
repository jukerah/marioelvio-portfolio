import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { svgs } from "../../../data/SvgList";
import { pageInfo } from "../../../data/PageData";

import { SubTitle } from "../../../components/SubTitle";

export const PersonalDetails = () => {
  const { theme } = useContext(Context);

  return (
    <C.PersonalDetails>
      <SubTitle subTitle={pageInfo.about.personalDetails.title} />

      <C.ContainerInfo
        mode={theme.mode.status}
        isMenuOpen={theme.isMenuOpen.status}
      >
        <div className="direction">
          <div className="info">
            {svgs.systemIcon.phone}
            <a href={`tel:${pageInfo.about.personalDetails.phone}`} target="_blank" rel="noopener noreferrer">
              {pageInfo.about.personalDetails.phone}
            </a>
          </div>
          <div className="info">
            {svgs.systemIcon.mail}
            <a href={`mailto:${pageInfo.about.personalDetails.email}`} target="_blank" rel="noopener noreferrer">
              {pageInfo.about.personalDetails.email}
            </a>
          </div>
          <div className="info">
            {svgs.systemIcon.mapPin}
            <p>{pageInfo.about.personalDetails.address}</p>
          </div>
        </div>
        <div className="direction">
          <div className="info">
            {svgs.systemIcon.linkedin}
            <a href={pageInfo.about.personalDetails.linkedin.url} target="_blank" rel="noopener noreferrer">
              {pageInfo.about.personalDetails.linkedin.text}
            </a>
          </div>
          <div className="info">
            {svgs.systemIcon.github}
            <a href={pageInfo.about.personalDetails.github.url} target="_blank" rel="noopener noreferrer">
              {pageInfo.about.personalDetails.github.text}
            </a>
          </div>
          <div className="info">
            {svgs.systemIcon.youtube}
            <a href={pageInfo.about.personalDetails.youtube.url} target="_blank" rel="noopener noreferrer">
              {pageInfo.about.personalDetails.youtube.text}
            </a>
          </div>
        </div>
      </C.ContainerInfo>
    </C.PersonalDetails>
  );
};
