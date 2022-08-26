import { useContext } from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { pageData } from "../../data/PageData";
import { svgs } from "../../data/SvgList";

import { SwitchMode } from "../SwitchMode";
import { LoginLogoutButton } from "../LoginLogoutButton";
import { ChangeLang } from "../ChangeLang";

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
  const lang: string = theme.lang.status;

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
            <p>{pageData.home.pageTitle[lang]}</p>
          </Link>
        </li>
        <li id="about">
          <Link to={"/about"} onClick={handleClickMenu}>
            {svgs.systemIcon.user}
            <p>{pageData.about.pageTitle[lang]}</p>
          </Link>
        </li>
        <li id="portfolio">
          <Link to={"/portfolio"} onClick={handleClickMenu}>
            {svgs.systemIcon.book}
            <p>{pageData.portfolio.pageTitle[lang]}</p>
          </Link>
        </li>
        <li id="blog">
          <a
            href="https://blog.marioelvio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {svgs.systemIcon.article}
            <p>{pageData.blog.pageTitle[lang]}</p>
          </a>
        </li>
        <li id="contact">
          <Link to={"/contact"} onClick={handleClickMenu}>
            {svgs.systemIcon.mail}
            <p>{pageData.contact.pageTitle[lang]}</p>
          </Link>
        </li>
      </ul>
      <C.ContainerButtons>
        <div className='top-line'>
          <ChangeLang />
          <SwitchMode />
        </div>
        <LoginLogoutButton/>
      </C.ContainerButtons>
    </C.NavMobile>
  );
};
