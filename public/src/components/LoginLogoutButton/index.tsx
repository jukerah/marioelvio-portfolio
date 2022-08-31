import { useContext } from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { pageInfo } from "../../data/PageInfo";
import { svgs } from "../../data/SvgList";

export const LoginLogoutButton = () => {
  const { theme, dispatch } = useContext(Context);
  const lang: string = theme.lang.status;

  const button = {
    text: pageInfo.button.login[ lang as keyof typeof pageInfo.button.login ]
  }

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
        <p>{button.text}</p>
        {svgs.systemIcon.login}
      </Link>
    </C.LoginLogoutButton>
  );
};
