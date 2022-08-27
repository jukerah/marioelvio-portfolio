import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { svgs } from "../../data/SvgList";
import { pageData } from "../../data/PageData";

export const Footer = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  const footer = {
    text: pageData.footer[ lang as keyof typeof pageData.footer ]
  }

  return (
    <C.Footer mode={theme.mode.status}>
      <C.SocialButtons mode={theme.mode.status}>
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
      <p>{footer.text}</p>
    </C.Footer>
  );
};
