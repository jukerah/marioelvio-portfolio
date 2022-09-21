import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { svgs } from "../../data/SvgList";
import { pageInfo } from "../../data/PageInfo";

export const Footer = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  const footer = {
    text: pageInfo.footer[ lang as keyof typeof pageInfo.footer ]
  }

  return (
    <C.Footer mode={theme.mode.status}>
      <C.SocialButtons mode={theme.mode.status}>
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
      <p>{footer.text}</p>
    </C.Footer>
  );
};
