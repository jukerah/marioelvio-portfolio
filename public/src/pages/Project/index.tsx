import { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { pageInfo } from "../../data/PageInfo";
import { svgs } from "../../data/SvgList";
import { ProjectType } from "../../types/ProjectType";

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
  const projectFilter = pageInfo.portfolio.project.list.filter(searchProject);
  const projectFiltered = projectFilter[0];

  const project = {
    name: projectFiltered.name,
    img: projectFiltered.img,
    alt: projectFiltered.alt,
    about: {
      title: pageInfo.portfolio.project.aboutProject[ lang as keyof typeof pageInfo.portfolio.project.aboutProject ],
      description: projectFiltered.description[ lang as keyof typeof projectFiltered.description ]
    },
    technologies: {
      title: pageInfo.portfolio.project.projectTechnologies[ lang as keyof typeof pageInfo.portfolio.project.projectTechnologies ],
      list: projectFiltered.technologies
    },
    resources: {
      title: pageInfo.portfolio.project.resources[ lang as keyof typeof pageInfo.portfolio.project.resources ],
      webSite: projectFiltered.resources.webSite,
      figma: projectFiltered.resources.figma,
      github: projectFiltered.resources.gitHub
    }
  }

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

        <img src={project.img.sm} srcSet={`${project.img.sm} 300w, ${project.img.md} 768w, ${project.img.lg} 1024w`} alt={project.alt} />

        <C.Description mode={theme.mode.status}>
          <h2>{project.about.title}</h2>
          <p>{project.about.description}</p>
        </C.Description>

        <C.ContainerTechRes isMenuOpen={theme.isMenuOpen.status}>
          <C.Technologies mode={theme.mode.status}>
            <h2>{project.technologies.title}</h2>
            <ul>
              {project.technologies.list.map((tech: string, index: number) => (
                <li key={index}>
                  <p>{tech}</p>
                </li>
              ))}
            </ul>
          </C.Technologies>

          <C.Resources mode={theme.mode.status}>
            {(project.resources.webSite !== "" ||
                project.resources.github !== "" ||
                project.resources.figma !== "") &&
              <h2>{project.resources.title}</h2>
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

              {(project.resources.github !== "") &&
                <li>
                  <a href={project.resources.github} target="_blank" rel="noopener noreferrer">
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
