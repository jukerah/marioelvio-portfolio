import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router-dom';
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { svgs } from "../../data/SvgList";
import { ProjectType } from "../../types/ProjectType";

import { pageInfo } from "../../data/PageData";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";

interface Props {
  page: string;
}

export const ProjectPage = (props: Props) => {
  const { theme, dispatch } = useContext(Context);
  const { i18n } = useTranslation();
  const params = useParams();

  const searchProject = (project: ProjectType) => { return project.url === params.slug; }    
  const projectInfo: ProjectType[] = pageInfo.portfolio.project.list.filter(searchProject);
  const project: ProjectType = projectInfo[0];

  useEffect(() => {
    if (props.page === "project") {
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
    <C.ProjectSection mode={theme.mode.status}>
      <C.Container mode={theme.mode.status}>
        <C.Header>
          <BackButton url={'/portfolio'}/>
          <h1>{project.name}</h1>        
        </C.Header>

        <img src={project.img} alt={project.alt}/>

        <C.Description mode={theme.mode.status}>
          <h2>{pageInfo.portfolio.project.aboutProject[ i18n.language as keyof typeof pageInfo.portfolio.project.aboutProject ]}</h2>
          <p>{project.description[ i18n.language as keyof typeof project.description ]}</p>
        </C.Description>

        <C.ContainerTechRes isMenuOpen={theme.isMenuOpen.status}>
          <C.Technologies mode={theme.mode.status}>
            <h2>{pageInfo.portfolio.project.projectTechnologies[ i18n.language as keyof typeof pageInfo.portfolio.project.projectTechnologies ]}</h2>
            <ul>
              {project.technologies.map((tech:string, index:number) => (
                <li key={index}>
                  <p>{tech}</p>
                </li>
              ))}
            </ul>
          </C.Technologies>

          <C.Resources mode={theme.mode.status}>
            {(project.resources.webSite !== "" ||
                project.resources.gitHub !== "" ||
                project.resources.figma !== "") &&
              <h2>{pageInfo.portfolio.project.resources[ i18n.language as keyof typeof pageInfo.portfolio.project.resources ]}</h2>
            }
            <ul>
              {(project.resources.webSite !== "") &&
                <li>
                  <a href={project.resources.webSite} target="_blank" rel="noopener noreferrer">
                    {svgs.systemIcon.link}
                    <p>WebSite</p>
                  </a>
                </li>
              }

              {(project.resources.gitHub !== "") &&
                <li>
                  <a href={project.resources.gitHub} target="_blank" rel="noopener noreferrer">
                    {svgs.systemIcon.github}
                    <p>GitHub</p>
                  </a>
                </li>
              }

              {(project.resources.figma !== "") &&
                <li>
                  <a href={project.resources.figma} target="_blank" rel="noopener noreferrer">
                    {svgs.systemIcon.figma}
                    <p>Figma</p>
                  </a>
                </li>
              }
            </ul>
          </C.Resources>
        </C.ContainerTechRes>
      </C.Container>

      <Footer />
    </C.ProjectSection>
  );
};
