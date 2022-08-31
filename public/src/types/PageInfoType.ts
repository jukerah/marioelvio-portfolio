import { CertificateType } from "./CertificateType";
import { CourseType } from "./CourseType";
import { EducationType } from "./EducationType";
import { TechnologyType } from "./TechnologyType";
import { WorkExperienceType } from "./WorkExperienceType";
import { ProjectType } from "./ProjectType";
import { SoftSkillType } from "./SoftSkillType";
import { LangType } from "./LangType";

export type PageDataType = {
  development: LangType;
  htmlTitle: string;
  home: {
    pageTitle: LangType;
    info: {
      hello: {
        en: React.ReactNode;
        pt: React.ReactNode;
      };
      name: {
        en: React.ReactNode;
        pt: React.ReactNode;
      };
      work: {
        en: React.ReactNode;
        pt: React.ReactNode;
      };
    };
  };
  about: {
    pageTitle: LangType;
    personalResume: {
      title: LangType;
      resume: LangType;
    };
    professionalResume: {
      title: LangType;
      resume: LangType;
    };
    myInterests: {
      title: LangType;
      tech: TechnologyType[];
    };
    personalDetails: {
      title: LangType;
      phone: string;
      email: string;
      address: string;
      linkedin: {
        text: string;
        url: string;
      };
      github: {
        text: string;
        url: string;
      };
      youtube: {
        text: string;
        url: string;
      };
    };
    download: LangType;
    workExperience: {
      title: LangType;
      activities: LangType;
      workList: WorkExperienceType[];
    };
    education: {
      title: LangType;
      educationList: EducationType[];
    };
    courses: {
      title: LangType;
      courseList: CourseType[];
    };
    certificates: {
      title: LangType;
      certificateList: CertificateType[];
    };
    softSkills: {
      title: LangType;
      description: LangType;
      skill: SoftSkillType[];
    };
    hardSkills: {
      title: LangType;
      description: LangType;
      frontEnd: {
        skill: TechnologyType[];
      };
      backEnd: {
        skill: TechnologyType[];
      };
      mobile: {
        skill: TechnologyType[];
      };
      tools: {
        name: LangType;
        skill: TechnologyType[];
      };
      database: {
        name: LangType;
        skill: TechnologyType[];
      };
    };
  };
  portfolio: {
    pageTitle: LangType;
    project: {
      aboutProject: LangType;
      projectTechnologies: LangType;
      resources: LangType;
      list: ProjectType[];
      noDataFound: LangType;
    };
  };
  blog: {
    pageTitle: LangType;
  };
  contact: {
    pageTitle: LangType;
    info: LangType;
    form: {
      name: {
        placeHolder: LangType;
        alert: {
          empty: LangType;
        };
      };
      email: {
        placeHolder: LangType;
        alert: {
          empty: LangType;
          invalid: LangType;
        };
      };
      phone: {
        placeHolder: LangType;
        alert: {
          empty: LangType;
          invalid: LangType;
        };
        ddiList: string[];
      };
      message: {
        placeHolder: LangType;
        alert: {
          empty: LangType;
        };
        send: LangType;
      };
    };
  };
  login: {
    pageTitle: LangType;
  };
  notFound: {
    pageTitle: LangType;
    text: LangType;
  };
  footer: LangType;
  button: {
    back: LangType;
    viewMore: LangType;
    moreAboutMe: LangType;
    myPortfolio: LangType;
    login: LangType;
    sendMessage: LangType;
  };
};
