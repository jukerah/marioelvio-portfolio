import { useContext, useState } from "react";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { pageInfo } from "../../data/PageInfo";
import { svgs } from "../../data/SvgList";

import { TitlePage } from "../../components/TitlePage";
import { SliderMode } from "./Slider";
import { GridMode } from "./Grid";

interface Props {
  page: any;
}

export const PortfolioPage = (props: Props) => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  const [ showMode, setShowMode ] = useState<"slider" | "grid">("slider");
  const [ searchValue, setSearchValue ] = useState<string>("All");

  const portfolio = {
    title: pageInfo.portfolio.pageTitle[ lang as keyof typeof pageInfo.portfolio.pageTitle ],
    projectList: pageInfo.portfolio.project.list
  }

  const handleClickSearch = (value: string) => {
    value === 'Todos' ? setSearchValue('All') : setSearchValue(value);
  }

  return (
    <C.PortfolioSection
      ref={props.page}
      mode={theme.mode.status}
    >
      <C.Container>
        <TitlePage title={portfolio.title} />

        <C.ContainerButtons>
          <C.SelectButton
            onChange={e => handleClickSearch(e.target.value)}
          >
            <option value="All">{lang === 'en' ? 'All' : 'Todos'}</option>
            <option value="Front-end">Front-end</option>
            <option value="Back-end">Back-end</option>
            <option value="Full-stack">Full-stack</option>
            <option value="UI Design">UI Design</option>
          </C.SelectButton>

          <C.Button
            mode={theme.mode.status}
            isActive={showMode === "slider" ? true : false}
            aria-label="Slider mode"
            onClick={() => setShowMode("slider")}
          >
            {svgs.systemIcon.slide}
          </C.Button>
          <C.Button
            mode={theme.mode.status}
            isActive={showMode === "grid" ? true : false}
            aria-label="Grid mode"
            onClick={() => setShowMode("grid")}
          >
            {svgs.systemIcon.grid}
          </C.Button>
        </C.ContainerButtons>

        <C.ContainerPortfolio>
          {(showMode === 'slider') &&
            <SliderMode
              projectList={portfolio.projectList}
              searchProject={searchValue}
            />
          }

          {(showMode === 'grid') &&
            <GridMode
              projectList={portfolio.projectList}
              searchProject={searchValue}
            />
          }
        </C.ContainerPortfolio>
      </C.Container>
    </C.PortfolioSection>
  );
};
