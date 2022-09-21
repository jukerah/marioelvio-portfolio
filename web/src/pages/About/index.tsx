import { useContext } from "react";
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

interface Props {
  page: any;
}

export const AboutPage = (props: Props) => {
  const { theme } = useContext(Context);
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

  return (
    <C.AboutSection
      ref={props.page}
      mode={theme.mode.status}
    >
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
    </C.AboutSection>
  );
};
