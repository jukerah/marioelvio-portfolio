import { useContext, useState } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { svgs } from "../../../data/SvgList";
import { pageData } from "../../../data/PageData";

export const DownloadButton = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;
  const [ isOpened, setIsOpened ] = useState(false);

  return (
    <>
      <C.DownloadButton
        mode={theme.mode.status}
        onClick={() => setIsOpened(true)}
      >
        <p>{pageData.about.download[lang]}</p>
        {svgs.systemIcon.download}
      </C.DownloadButton>

      <C.BackgroundCv
        mode={theme.mode.status}
        isOpened={isOpened}
        isMenuOpen={theme.isMenuOpen.status}
        onClick={() => setIsOpened(false)}
      />

      <C.ContainerCV
        mode={theme.mode.status}
        isOpened={isOpened}
      >        
        <div onClick={() => setIsOpened(false)}>
          {svgs.systemIcon.close}
        </div>
        <a
          href="https://marioelvio.com/cv_mario_elvio_en.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpened(false)}
        >
          CV - En
        </a>
        <a
          href="https://marioelvio.com/cv_mario_elvio_pt.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpened(false)}
        >
          CV - Pt
        </a>
      </C.ContainerCV>
    </>
  );
};
