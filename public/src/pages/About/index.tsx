import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { pageInfo } from "../../data/PageData";

import { TitlePage } from "../../components/TitlePage";
import { Resume } from "./Resume";
import { MyInterests } from "./MyInterests";
import { PersonalDetails } from "./PersonalDetails";
import { DownloadButton } from "./DownloadButton";
import { TimeLine } from "./TimeLine";
import { SoftSkills } from "./softSkills";
import { HardSkills } from "./HardSkills";
import { Footer } from "../../components/Footer";

interface Props {
  page: string;
}

export const AboutPage = (props: Props) => {
  const { theme, dispatch } = useContext(Context);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (props.page === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });

      dispatch({
        type: "CHANGE_ACTIVE_PAGE",
        payload: {
          status: props.page,
        },
      });
    }
  },[props.page, dispatch, theme.activePage.status]);

  return (
    <C.AboutSection mode={theme.mode.status}>
      <C.Container>
        <TitlePage title={pageInfo.about.pageTitle[ i18n.language as keyof typeof pageInfo.about.pageTitle ]} />

        <Resume
          title={pageInfo.about.personalResume.title[ i18n.language as keyof typeof pageInfo.about.personalResume.title ]}
          description={pageInfo.about.personalResume.resume[ i18n.language as keyof typeof pageInfo.about.personalResume.resume ]}
        />

        <Resume
          title={pageInfo.about.professionalResume.title[ i18n.language as keyof typeof pageInfo.about.professionalResume.title ]}
          description={pageInfo.about.professionalResume.resume[ i18n.language as keyof typeof pageInfo.about.professionalResume.title ]}
        />

        <MyInterests />

        <PersonalDetails />

        <DownloadButton />

        <TimeLine />

        <SoftSkills />

        <HardSkills />

        <DownloadButton />
      </C.Container>

      <Footer />
    </C.AboutSection>
  );
};
