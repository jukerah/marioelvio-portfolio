import { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { ProjectListType } from "../../types/ProjectListType";

import { pageInfo } from "../../data/PageData";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";

interface Props {
  page: string;
}

export const ProjectPage = (props: Props) => {
  const { theme } = useContext(Context);
  const params = useParams();

  const searchProject = (project: ProjectListType) => { return project.url === params.slug; }    
  const projectInfo: ProjectListType[] = pageInfo.portfolio.project.filter(searchProject);
  const project: ProjectListType = projectInfo[0];
  
  useEffect(() => {
    if (props.page === "project") window.scrollTo({ top: 0, behavior: "smooth" });
  }, [props.page]);

  return (
    <C.ProjectSection mode={theme.mode.status}>
      <C.Container mode={theme.mode.status}>
        <C.Header>
          <BackButton url={'/portfolio'}/>
          <h1>{project.name}</h1>        
        </C.Header>

        <img src={project.img} alt={project.alt}/>

        <C.Description mode={theme.mode.status}>
          <h2>About this Project</h2>
          <p>{project.description}</p>
        </C.Description>

        <C.ContainerTechRes isMenuOpen={theme.isMenuOpen.status}>
          <C.Technologies mode={theme.mode.status}>
            <h2>Project Technologies</h2>
            <ul>
              {project.technologies.map((tech:any, index:number) => (
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
              <h2>Resources</h2>
            }
            <ul>
              {(project.resources.webSite !== "") &&
                <li>
                  <a href={project.resources.webSite} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="stroke" d="M10 13.9999C10.3259 14.3325 10.7148 14.5967 11.1441 14.7771C11.5734 14.9575 12.0344 15.0504 12.5 15.0504C12.9656 15.0504 13.4266 14.9575 13.8559 14.7771C14.2852 14.5967 14.6741 14.3325 15 13.9999L19 9.99989C19.663 9.33685 20.0355 8.43757 20.0355 7.49989C20.0355 6.56221 19.663 5.66293 19 4.99989C18.337 4.33685 17.4377 3.96436 16.5 3.96436C15.5623 3.96436 14.663 4.33685 14 4.99989L13.5 5.49989" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path className="stroke" d="M14.0004 10.0002C13.6745 9.66762 13.2855 9.40339 12.8563 9.22301C12.427 9.04262 11.966 8.94971 11.5004 8.94971C11.0347 8.94971 10.5738 9.04262 10.1445 9.22301C9.71523 9.40339 9.32626 9.66762 9.00038 10.0002L5.00038 14.0002C4.33734 14.6633 3.96484 15.5625 3.96484 16.5002C3.96484 17.4379 4.33734 18.3372 5.00038 19.0002C5.66342 19.6633 6.5627 20.0358 7.50038 20.0358C8.43806 20.0358 9.33734 19.6633 10.0004 19.0002L10.5004 18.5002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>WebSite</p>
                  </a>
                </li>
              }

              {(project.resources.gitHub !== "") &&
                <li>
                  <a href={project.resources.gitHub} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="stroke" d="M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.50001C19.9988 8.30498 19.5325 7.15732 18.7 6.30001C19.0905 5.26198 19.0545 4.11164 18.6 3.10001C18.6 3.10001 17.5 2.80001 15.1 4.40001C13.0672 3.8706 10.9328 3.8706 8.9 4.40001C6.5 2.80001 5.4 3.10001 5.4 3.10001C4.94548 4.11164 4.90953 5.26198 5.3 6.30001C4.46745 7.15732 4.00122 8.30498 4 9.50001C4 14.1 6.7 15.2 9.5 15.5C8.9 16.1 8.9 16.7 9 17.5V21M9 19C4.7 20.4 4.7 16.5 3 16L9 19Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>GitHub</p>
                  </a>
                </li>
              }

              {(project.resources.figma !== "") &&
                <li>
                  <a href={project.resources.figma} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="fill" d="M8.5 22C10.433 22 12 20.5077 12 18.6667V15.3333H8.5C6.56698 15.3333 5 16.8258 5 18.6667C5 20.5077 6.56698 22 8.5 22Z"/>
                      <path className="fill" d="M5 12C5 10.159 6.56698 8.66669 8.5 8.66669H12V15.3334H8.5C6.56698 15.3334 5 13.8409 5 12V12Z"/>
                      <path className="fill" d="M5 5.33336C5 3.49238 6.56698 2 8.5 2H12V8.6667H8.5C6.56698 8.6667 5 7.17427 5 5.33336V5.33336Z"/>
                      <path className="fill" d="M12 2H15.5C17.433 2 19 3.49238 19 5.33336C19 7.17427 17.433 8.6667 15.5 8.6667H12V2V2Z"/>
                      <path className="fill" d="M19 12C19 13.8409 17.433 15.3334 15.5 15.3334C13.567 15.3334 12 13.8409 12 12C12 10.159 13.567 8.66669 15.5 8.66669C17.433 8.66669 19 10.159 19 12Z"/>
                    </svg>
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
