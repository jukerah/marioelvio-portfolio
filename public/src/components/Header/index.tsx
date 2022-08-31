import { useContext } from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { svgs } from "../../data/SvgList";

import { SwitchMode } from "../SwitchMode";
import { LoginLogoutButton } from "../LoginLogoutButton";
import { MenuMobile, NavMobile } from "../MenuMobile";
import { ChangeLang } from "../ChangeLang";
import { pageInfo } from "../../data/PageInfo";

export const Header = () => {
  const { theme, dispatch } = useContext(Context);
  const lang: string = theme.lang.status;

  const header = {
    logo: pageInfo.header.logo[ lang as keyof typeof pageInfo.header.logo ]
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
    <C.Header
      mode={theme.mode.status}
      isMenuOpen={theme.isMenuOpen.status}
    >
      <C.Container mode={theme.mode.status}>
        <Link 
          to={"/home"}
          onClick={handleClickMenu}
          aria-label={header.logo}
        >
          {svgs.logo}
        </Link>

        <MenuMobile />

        <div className="switch">
          <SwitchMode />
        </div>

        <div className="container-button">
          <ChangeLang />
          <LoginLogoutButton />
        </div>
      </C.Container>

      <NavMobile />
    </C.Header>
  );
};
