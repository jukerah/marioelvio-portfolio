import { useTranslation } from "react-i18next";
import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { svgs } from "../../data/SvgList";

export const ChangeLang = () => {
  const { theme } = useContext(Context);
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    switch (i18n.language) {
      case "pt":
      case "pt-BR":
        i18n.changeLanguage("en");
        break;
      case "en":
      case "en-US":
        i18n.changeLanguage("pt");
        break;
    }
  };

  return (
    <C.ChangeLang mode={theme.mode.status} onClick={changeLanguage}>
      <img
        src={
          i18n.language === "en" || i18n.language === "en-US"
            ? svgs.country.brazil
            : svgs.country.unitedStates
        }
        alt={
          i18n.language === "en"
            ? t("svgs.country.brazil.alt")
            : t("svgs.country.unitedStates.alt")
        }
      />
      <p>{i18n.language === "en" ? "Pt" : "En"}</p>
    </C.ChangeLang>
  );
};
