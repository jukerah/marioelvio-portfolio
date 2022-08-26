import { useContext } from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { svgs } from "../../data/SvgList";
import { pageData } from "../../data/PageData";

export const LoginLogoutButton = () => {
  const { theme, dispatch } = useContext(Context);
  const lang: string = theme.lang.status;

  const handleClickMenu = () => {
    dispatch({
      type: "CHANGE_MENU",
      payload: {
        status: false,
      },
    });
  };

  return (
    <C.LoginLogoutButton
      mode={theme.mode.status}
      onClick={handleClickMenu}
    >
      <Link to={"/login"}>
        <p>{pageData.button.login[lang]}</p>
        {svgs.systemIcon.login}
      </Link>
    </C.LoginLogoutButton>
  );
};
