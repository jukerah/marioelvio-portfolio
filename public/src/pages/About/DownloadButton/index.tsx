import { useContext, useState } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";

export const DownloadButton = () => {
  const { theme } = useContext(Context);
  const [ isOpened, setIsOpened ] = useState(false);

  return (
    <>
      <C.DownloadButton
        mode={theme.mode.status}
        onClick={() => setIsOpened(true)}
      >
        <p>Download CV</p>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 11L12 16L17 11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 4V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
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
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          onClick={() => setIsOpened(false)}
        >
          <path d="M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 6L18 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <a href="https://marioelvio.com/cv_mario_elvio_en.pdf" target="_blank" rel="noopener noreferrer"
          onClick={() => setIsOpened(false)}
        >
          CV - En
        </a>
        <a href="https://marioelvio.com/cv_mario_elvio_pt.pdf" target="_blank" rel="noopener noreferrer"
          onClick={() => setIsOpened(false)}
        >
          CV - Pt
        </a>
      </C.ContainerCV>
    </>
  );
};
