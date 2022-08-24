import { CertificateType } from "./CertificateType";
import { CourseType } from "./CourseType";
import { EducationType } from "./EducationType";
import { TechnologyType } from "./TechnologyType";
import { WorkExperienceType } from "./WorkExperienceType";
import { ProjectType } from "./ProjectType";
import { SoftSkillType } from "./SoftSkillType";
import { LangType } from "./LangType";

export type PageDataType = {
    development: string;
    htmlTitle: string;
    home: {
        pageTitle: string;
    }
    about: {
        pageTitle: LangType,
        personalResume: {
            title: LangType
            resume: LangType
        }
        professionalResume: {
            title: LangType
            resume: LangType
        }
        myInterests: {
            title: LangType
            tech: TechnologyType[]
        }
        personalDetails: {
            title: LangType
            phone: string;
            email: string;
            address: string;
            linkedin: {
                text: string;
                url: string;
            }
            github: {
                text: string;
                url: string;
            }
            youtube: {
                text: string;
                url: string;
            }
        }
        download: LangType
        workExperience: {
            title: LangType
            activities: LangType
            workList: WorkExperienceType[];
        }
        education: {
            title: LangType
            educationList: EducationType[];
        }
        courses: {
            title: LangType
            courseList: CourseType[];
        }
        certificates: {
            title: LangType
            certificateList: CertificateType[];
        }
        softSkills: {
            title: LangType
            description: LangType
            skill: SoftSkillType[];
        }
        hardSkills: {
            title: LangType
            description: LangType
            frontEnd: {
                skill: TechnologyType[];
            }
            backEnd: {
                skill: TechnologyType[];
            }
            mobile: {
                skill: TechnologyType[];
            }
            tools: {
                name: LangType;
                skill: TechnologyType[];
            }
            database: {
                name: LangType;
                skill: TechnologyType[];
            }
        }
    }
    portfolio: {
        pageTitle: LangType;
        project: {
            aboutProject: LangType;
            projectTechnologies: LangType;
            resources: LangType;
            list: ProjectType[];
            noDataFound: LangType;
        }
    }
    blog: {
        name: string;
    }
    contact: {
        name: string;
    }
    login: {
        name: string;
    }
    button: {
        back: LangType;
        viewMore: LangType;
    }
}