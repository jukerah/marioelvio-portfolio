import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { svgs } from "../../data/SvgList";

export const ChangeLang = () => {
  const { theme, dispatch } = useContext(Context);  
  const lang: string = theme.lang.status;

  const changeLanguage = () => {
    switch (theme.lang.status) {
      case "en":
        localStorage.setItem("lang", "pt");
        dispatch({
          type: "CHANGE_LANG",
          payload: {
            status: 'pt',
          },
        });
        break;
      case "pt":
        localStorage.setItem("lang", "en");
        dispatch({
          type: "CHANGE_LANG",
          payload: {
            status: 'en',
          },
        });
        break;
    }
  };

  return (
    <C.ChangeLang mode={theme.mode.status} onClick={changeLanguage}>
      {lang === "en"
        ? svgs.country.brazil
        : svgs.country.unitedStates
      }
      <p>{lang === "en" ? "pt" : "en"}</p>
    </C.ChangeLang>
  );
};
