import * as C from "./styles";

import { Project } from "../Project";
import { ProjectType } from "../../../types/ProjectType";
import { NoDataFound } from "../NoDataFound";

interface Props {
  ProjectList: ProjectType[];
  searchProject: string;
}

export const GridMode = (props: Props) => {
  const projectFilter = (item: ProjectType) => {
    return item.category.includes(props.searchProject);
  }

  const countBannerList: number = props.ProjectList.filter(projectFilter).length;

  if (countBannerList === 0) {
    return (
      <NoDataFound />
    );
  } else {
    return (
      <C.ContainerGrid>
        {props.ProjectList.map((project: ProjectType, index:number) =>
          project.category.includes(props.searchProject) && (
            <Project
              key={index}
              name={project.name}
              src={project.img}
              alt={project.alt}
              url={project.url}
            />
          )
        )}
      </C.ContainerGrid>
    );
  }
};
