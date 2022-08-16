import { useContext, useEffect, useState } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { Project } from "../Project";
import { ProjectListType } from "../../../types/ProjectListType"

interface Props {
  ProjectList: ProjectListType[];
  searchProject: string;
}

export const SliderMode = (props: Props) => {
  const { theme } = useContext(Context);
  const [activeBanner, setActiveBanner] = useState<number>(0);

  const handleClickChangeBanner = (position: number) => {
    if (position === 1) {
      if (activeBanner >= 0 && activeBanner < countBannerList - 1) {
        setActiveBanner(activeBanner + position);
      }
    } else {
      if (activeBanner > 0) setActiveBanner(activeBanner + position);
    }
  };

  const projectFilter = (item: ProjectListType) => {
    return item.category.includes(props.searchProject);
  }

  const countBannerList: number = props.ProjectList.filter(projectFilter).length;

  useEffect(() => {
    setActiveBanner(0);
  }, [countBannerList]);

  return (
    <C.ContainerSlider>
      <C.ButtonChangeImg
        mode={theme.mode.status}
        onClick={() => handleClickChangeBanner(-1)}
        position={"left"}
        disable={activeBanner === 0 ? true : false}
      >
        <div className="button-change-img">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6L9 12L15 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </C.ButtonChangeImg>

      <C.Slider>
        <C.ContainerProject
          position={activeBanner * 100}
          countBanner={countBannerList}
        >
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
        </C.ContainerProject>

        <C.ContainerPercent
          position={((activeBanner + 1) / countBannerList) * 100}
        >
          <div className="percent-line"></div>
        </C.ContainerPercent>
      </C.Slider>

      <C.ButtonChangeImg
        mode={theme.mode.status}
        onClick={() => handleClickChangeBanner(1)}
        position={"right"}
        disable={activeBanner === countBannerList - 1 ? true : false}
      >
        <div className="button-change-img">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </C.ButtonChangeImg>
    </C.ContainerSlider>
  );
};
