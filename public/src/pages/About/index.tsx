import { useContext, useEffect } from "react";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { pageData } from "../../data/PageData";

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
  const lang: string = theme.lang.status;

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
        <TitlePage title={pageData.about.pageTitle[lang]} />

        <Resume
          title={pageData.about.personalResume.title[lang]}
          description={pageData.about.personalResume.resume[lang]}
        />

        <Resume
          title={pageData.about.professionalResume.title[lang]}
          description={pageData.about.professionalResume.resume[lang]}
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
