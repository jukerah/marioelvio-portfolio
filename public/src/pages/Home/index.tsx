import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { pageInfo } from "../../data/PageInfo";
import { svgs } from "../../data/SvgList";

import { PrimaryButton } from "../../components/PrimaryButton";

interface Props {
  page: any;
  isActivedPage: string;
}

export const HomePage = (props: Props) => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  const home = {
    info: {
      hello: pageInfo.home.info.hello[ lang as keyof typeof pageInfo.home.info.hello ],
      name: pageInfo.home.info.name[ lang as keyof typeof pageInfo.home.info.name ],
      work: pageInfo.home.info.work[ lang as keyof typeof pageInfo.home.info.work ]
    },
    button: {
      moreAboutMe: pageInfo.button.moreAboutMe[ lang as keyof typeof pageInfo.button.moreAboutMe ],
      myPortfolio: pageInfo.button.myPortfolio[ lang as keyof typeof pageInfo.button.myPortfolio ]
    }
  }

  return (
    <C.HomeSection
      ref={props.page}
      mode={theme.mode.status}
      isMenuOpen={theme.isMenuOpen.status}
      backgroundLandscapeSmall={svgs.background.home.landscape.small}
      backgroundLandscapeLarge={svgs.background.home.landscape.large}
      backgroundPortrait={svgs.background.home.portrait}
    >
      <C.Container
        className="load-container"
        isMenuOpen={theme.isMenuOpen.status}
        isActivedPage={props.isActivedPage === 'home' ? true : false}
      >
        <C.ContainerInfo isMenuOpen={theme.isMenuOpen.status}>
          {svgs.avatar}

          <C.Info
            mode={theme.mode.status}
            lang={lang}
          >
            <h1 className="load-title">
              {home.info.hello}
              <br />
              {home.info.name}
              <br />
              {home.info.work}
            </h1>

            <C.SocialButtons
              className="load-social"
              mode={theme.mode.status}
            >
              <a
                aria-label="Linkedin"
                href="https://www.linkedin.com/in/marioelvio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {svgs.socialButton.linkedin}
              </a>
              <a
                aria-label="GitHub"
                href="https://github.com/jukerah"
                target="_blank"
                rel="noopener noreferrer"
              >
                {svgs.socialButton.github}
              </a>
              <a
                aria-label="Youtube"
                href="https://www.youtube.com/channel/UCIuG63VswXMTYUuzeZgqRjw"
                target="_blank"
                rel="noopener noreferrer"
              >
                {svgs.socialButton.youtube}
              </a>
              <a
                aria-label="WhatsApp"
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
            text={home.button.moreAboutMe}
            backgroundColor={"--limed-spruce"}
            backgroundColorHover={"--de-york"}
            color={"--white"}
            colorHover={"--limed-spruce"}
            url={"/about"}
          />

          <PrimaryButton
            text={home.button.myPortfolio}
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
