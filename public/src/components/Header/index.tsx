import { useContext } from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";

import { SwitchMode } from "../SwitchMode";
import { LoginLogoutButton } from "../LoginLogoutButton";
import { MenuMobile, NavMobile } from "../MenuMobile";
import { svgs } from "../../data/SvgList";

export const Header = () => {
  const { theme, dispatch } = useContext(Context);

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
          aria-label='Mario Elvio logo'
        >
          {svgs.logo}
        </Link>

        <MenuMobile />

        <div className="container-button">
          <SwitchMode />
        </div>

        <div className="container-button">
          <LoginLogoutButton />
        </div>
      </C.Container>

      <NavMobile />
    </C.Header>
  );
};
