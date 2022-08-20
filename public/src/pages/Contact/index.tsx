import { useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { TitlePage } from "../../components/TitlePage";

export const ContactPage = (props: any) => {
  const aboutPage = useRef(props.page);
  const { t } = useTranslation();
  const { theme, dispatch } = useContext(Context);

  useEffect(() => {
    if (props.page === "contact") {
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
    <C.ContactSection ref={aboutPage} mode={theme.mode.status}>
      <TitlePage title={t("page.contact.name")} />
      <h2>{t("development")}</h2>
      <a href="https://github.com/jukerah/marioelvio-portfolio" target="_blank" rel="noopener noreferrer">
        https://github.com/jukerah/marioelvio-portfolio
      </a>
    </C.ContactSection>
  );
};
