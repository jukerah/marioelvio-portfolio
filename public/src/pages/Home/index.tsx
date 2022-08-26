import { useContext, useEffect } from "react";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { svgs } from "../../data/SvgList";

import { PrimaryButton } from "../../components/PrimaryButton";
import { pageData } from "../../data/PageData";

export const HomePage = (props: any) => {
  const { theme, dispatch } = useContext(Context);
  const lang: string = theme.lang.status;

  useEffect(() => {
    if (props.page === "home") {
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
    <C.HomeSection
      mode={theme.mode.status}
      isMenuOpen={theme.isMenuOpen.status}
      backgroundLandscapeSmall={svgs.background.home.landscape.small}
      backgroundLandscapeLarge={svgs.background.home.landscape.large}
      backgroundPortrait={svgs.background.home.portrait}
    >
      <C.Container
        className="load-container"
        isMenuOpen={theme.isMenuOpen.status}
      >
        <C.ContainerInfo isMenuOpen={theme.isMenuOpen.status}>
          {svgs.avatar}

          <C.Info
            mode={theme.mode.status}
            lang={lang}
          >
            <h1 className="load-title">
              {pageData.home.info.hello[lang]}
              <br />
              {pageData.home.info.name[lang]}
              <br />
              {pageData.home.info.work[lang]}
            </h1>

            <C.SocialButtons
              className="load-social"
              mode={theme.mode.status}
            >
              <a
                aria-label="Linkedin button"
                href="https://www.linkedin.com/in/marioelvio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {svgs.socialButton.linkedin}
              </a>
              <a
                aria-label="GitHub button"
                href="https://github.com/jukerah"
                target="_blank"
                rel="noopener noreferrer"
              >
                {svgs.socialButton.github}
              </a>
              <a
                aria-label="Youtube button"
                href="https://www.youtube.com/channel/UCIuG63VswXMTYUuzeZgqRjw"
                target="_blank"
                rel="noopener noreferrer"
              >
                {svgs.socialButton.youtube}
              </a>
              <a
                aria-label="WhatsApp button"
                href="https://api.whatsapp.com/send?phone=5516988658468"
                target="_blank"
                rel="noopener noreferrer"
              >
                {svgs.socialButton.whatsapp}
              </a>
            </C.SocialButtons>
          </C.Info>
        </C.ContainerInfo>
        <C.NavButtons
          className="load-button"
          isMenuOpen={theme.isMenuOpen.status}
        >
          <PrimaryButton
            text={pageData.button.moreAboutMe[lang]}
            backgroundColor={"--limed-spruce"}
            backgroundColorHover={"--de-york"}
            color={"--white"}
            colorHover={"--limed-spruce"}
            url={"/about"}
          />

          <PrimaryButton
            text={pageData.button.myPortfolio[lang]}
            backgroundColor={"--skeptic"}
            backgroundColorHover={"--de-york"}
            color={"--limed-spruce"}
            colorHover={"--limed-spruce"}
            url={"/portfolio"}
          />
        </C.NavButtons>
      </C.Container>
    </C.HomeSection>
  );
};
