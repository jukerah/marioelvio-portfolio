import * as C from "./styles";

import { Project } from "../Project";
import { ProjectListType } from "../../../types/ProjectListType";

interface Props {
  ProjectList: ProjectListType[];
  searchProject: string;
}

export const GridMode = (props: Props) => {
  return (
    <C.ContainerGrid>
      {props.ProjectList.map((project: any) =>
          project.category.includes(props.searchProject) && (
            <Project
              name={project.name}
              src={project.img}
              alt={project.alt}
              url={project.url}
            />
          )
      )}
    </C.ContainerGrid>
  );
};
