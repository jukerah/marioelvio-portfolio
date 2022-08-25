import { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { svgs } from "../../data/SvgList";
import { ProjectType } from "../../types/ProjectType";

import { pageData } from "../../data/PageData";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";

interface Props {
  page: string;
}

export const ProjectPage = (props: Props) => {
  const { theme, dispatch } = useContext(Context);
  const lang: string = theme.lang.status;
  const params = useParams();

  const searchProject = (project: ProjectType) => { return project.url === params.slug; }    
  const projectInfo = pageData.portfolio.project.list.filter(searchProject);
  const project = projectInfo[0];

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
          <h2>{pageData.portfolio.project.aboutProject[lang]}</h2>
          <p>{project.description[lang]}</p>
        </C.Description>

        <C.ContainerTechRes isMenuOpen={theme.isMenuOpen.status}>
          <C.Technologies mode={theme.mode.status}>
            <h2>{pageData.portfolio.project.projectTechnologies[lang]}</h2>
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
              <h2>{pageData.portfolio.project.resources[lang]}</h2>
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
