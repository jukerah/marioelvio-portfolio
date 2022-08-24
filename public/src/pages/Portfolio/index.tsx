import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { svgs } from "../../data/SvgList";
import { pageInfo } from "../../data/PageData";

import { TitlePage } from "../../components/TitlePage";
import { SliderMode } from "./Slider";
import { GridMode } from "./Grid";
import { Footer } from "../../components/Footer";

interface Props {
  page: string;
}

export const PortfolioPage = (props: Props) => {
  const { theme, dispatch } = useContext(Context);
  const { i18n } = useTranslation();

  const [ showMode, setShowMode ] = useState<"slider" | "grid">("slider");
  const [ searchValue, setSearchValue ] = useState<string>("All");

  useEffect(() => {
    if (props.page === "portfolio") {
      window.scrollTo({ top: 0, behavior: "smooth" });

      dispatch({
        type: "CHANGE_ACTIVE_PAGE",
        payload: {
          status: props.page,
        },
      });
    }
  },[props.page, dispatch, theme.activePage.status]);

  const handleClickSearch = (value: string) => {
    value === 'Todos' ? setSearchValue('All') : setSearchValue(value);
  }

  return (
    <C.PortfolioSection mode={theme.mode.status}>
      <C.Container>
        <TitlePage title={pageInfo.portfolio.pageTitle[ i18n.language as keyof typeof pageInfo.portfolio.pageTitle ]} />

        <C.ContainerButtons>
          <C.SelectButton
            onChange={e => handleClickSearch(e.target.value)}
          >
            <option value="All">{i18n.language === 'en' ? 'All' : 'Todos'}</option>
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
              ProjectList={pageInfo.portfolio.project.list}
              searchProject={searchValue}
            />
          }

          {(showMode === 'grid') &&
            <GridMode
              ProjectList={pageInfo.portfolio.project.list}
              searchProject={searchValue}
            />
          }
        </C.ContainerPortfolio>
      </C.Container>

      <Footer />
    </C.PortfolioSection>
  );
};
