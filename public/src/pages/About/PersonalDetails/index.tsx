import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { svgs } from "../../../data/SvgList";
import { pageInfo } from "../../../data/PageInfo";

import { SubTitle } from "../../../components/SubTitle";

export const PersonalDetails = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  const personalDetails = {
    title: pageInfo.about.personalDetails.title[ lang as keyof typeof pageInfo.about.personalDetails.title ],
    info: {
      phone: pageInfo.about.personalDetails.phone,
      email: pageInfo.about.personalDetails.email,
      address: pageInfo.about.personalDetails.address,
      linkedin: {
        url: pageInfo.about.personalDetails.linkedin.url,
        text: pageInfo.about.personalDetails.linkedin.text
      },
      github: {
        url: pageInfo.about.personalDetails.github.url,
        text: pageInfo.about.personalDetails.github.text
      },
      youtube: {
        url: pageInfo.about.personalDetails.youtube.url,
        text: pageInfo.about.personalDetails.youtube.text
      }
    }
  }

  return (
    <C.PersonalDetails>
      <SubTitle subTitle={personalDetails.title} />

      <C.ContainerInfo
        mode={theme.mode.status}
        isMenuOpen={theme.isMenuOpen.status}
      >
        <div className="direction">
          <div className="info">
            {svgs.systemIcon.phone}
            <a href={`tel:${personalDetails.info.phone}`} target="_blank" rel="noopener noreferrer">
              {personalDetails.info.phone}
            </a>
          </div>
          <div className="info">
            {svgs.systemIcon.mail}
            <a href={`mailto:${personalDetails.info.email}`} target="_blank" rel="noopener noreferrer">
              {personalDetails.info.email}
            </a>
          </div>
          <div className="info">
            {svgs.systemIcon.mapPin}
            <p>{personalDetails.info.address}</p>
          </div>
        </div>
        <div className="direction">
          <div className="info">
            {svgs.systemIcon.linkedin}
            <a href={personalDetails.info.linkedin.url} target="_blank" rel="noopener noreferrer">
              {personalDetails.info.linkedin.text}
            </a>
          </div>
          <div className="info">
            {svgs.systemIcon.github}
            <a href={personalDetails.info.github.url} target="_blank" rel="noopener noreferrer">
              {personalDetails.info.github.text}
            </a>
          </div>
          <div className="info">
            {svgs.systemIcon.youtube}
            <a href={personalDetails.info.youtube.url} target="_blank" rel="noopener noreferrer">
              {personalDetails.info.youtube.text}
            </a>
          </div>
        </div>
      </C.ContainerInfo>
    </C.PersonalDetails>
  );
};
