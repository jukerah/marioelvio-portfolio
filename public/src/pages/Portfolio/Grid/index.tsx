import * as C from "./styles";

import { Project } from "../Project";
import { ProjectListType } from "../../../types/ProjectListType";
import { NoDataFound } from "../NoDataFound";

interface Props {
  ProjectList: ProjectListType[];
  searchProject: string;
}

export const GridMode = (props: Props) => {
  const projectFilter = (item: ProjectListType) => {
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
        {props.ProjectList.map((project: any, index:number) =>
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
