import { useContext, useEffect } from "react";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { pageInfo } from "../../data/PageInfo";

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

  const about = {
    title: pageInfo.about.pageTitle[ lang as keyof typeof pageInfo.about.pageTitle ],
    personalResume: {
      title: pageInfo.about.personalResume.title[ lang as keyof typeof pageInfo.about.personalResume.title ],
      resume: pageInfo.about.personalResume.resume[ lang as keyof typeof pageInfo.about.personalResume.resume ]
    },
    professionalResume: {
      title: pageInfo.about.professionalResume.title[ lang as keyof typeof pageInfo.about.professionalResume.title ],
      resume: pageInfo.about.professionalResume.resume[ lang as keyof typeof pageInfo.about.professionalResume.resume ]
    }
  }

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
        <TitlePage title={about.title} />

        <Resume
          title={about.personalResume.title}
          description={about.personalResume.resume}
        />

        <Resume
          title={about.professionalResume.title}
          description={about.professionalResume.resume}
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
