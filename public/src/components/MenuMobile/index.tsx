import { useContext } from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { svgs } from "../../data/SvgList";

import { SwitchMode } from "../SwitchMode";
import { LoginLogoutButton } from "../LoginLogoutButton";

export const MenuMobile = () => {
  const { theme, dispatch } = useContext(Context);

  const handleClickMenu = () => {
    if (theme.isMenuOpen.status) {
      dispatch({
        type: "CHANGE_MENU",
        payload: {
          status: false,
        },
      });
    } else {
      dispatch({
        type: "CHANGE_MENU",
        payload: {
          status: true,
        },
      });
    }
  };

  return (
    <C.MenuMobile
      mode={theme.mode.status}
      isMenuOpen={theme.isMenuOpen.status}
      onClick={handleClickMenu}
    >
      <button aria-label="Menu">
        <div></div>
        <div></div>
        <div></div>
      </button>
    </C.MenuMobile>
  );
};

export const NavMobile = () => {
  const { theme, dispatch } = useContext(Context);

  const handleClickMenu = () => {
    if (theme.isMenuOpen.status) {
      dispatch({
        type: "CHANGE_MENU",
        payload: {
          status: false,
        },
      });
    } else {
      dispatch({
        type: "CHANGE_MENU",
        payload: {
          status: true,
        },
      });
    }
  };

  return (
    <C.NavMobile
      mode={theme.mode.status}
      isMenuOpen={theme.isMenuOpen.status}
      activePage={theme.activePage.status}
    >
      <ul>
        <li id="home">
          <Link to={"/home"} onClick={handleClickMenu}>
            {svgs.systemIcon.home}
            <p>Home</p>
          </Link>
        </li>
        <li id="about">
          <Link to={"/about"} onClick={handleClickMenu}>
            {svgs.systemIcon.user}
            <p>About</p>
          </Link>
        </li>
        <li id="portfolio">
          <Link to={"/portfolio"} onClick={handleClickMenu}>
            {svgs.systemIcon.book}
            <p>Portfolio</p>
          </Link>
        </li>
        <li id="blog">
          <Link to={"/blog"} onClick={handleClickMenu}>
            {svgs.systemIcon.article}
            <p>Blog</p>
          </Link>
        </li>
        <li id="contact">
          <Link to={"/contact"} onClick={handleClickMenu}>
            {svgs.systemIcon.mail}
            <p>Contact</p>
          </Link>
        </li>
      </ul>
      <C.ContainerButtons>
        <SwitchMode />
        <LoginLogoutButton />
      </C.ContainerButtons>
    </C.NavMobile>
  );
};
