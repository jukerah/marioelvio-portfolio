import { useContext } from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { svgs } from "../../data/SvgList";

export const MenuDesktop = () => {
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
    <C.MenuDesktop
      mode={theme.mode.status}
      isMenuOpen={theme.isMenuOpen.status}
    >
      <C.MenuButton
        mode={theme.mode.status}
        isMenuOpen={theme.isMenuOpen.status}
        onClick={handleClickMenu}
      >
        <button aria-label="Menu">
          <div></div>
          <div></div>
          <div></div>
        </button>
      </C.MenuButton>

      <C.NavDesktop
        mode={theme.mode.status}
        isMenuOpen={theme.isMenuOpen.status}
        activePage={theme.activePage.status}
      >
        <ul>
          <li id="home">
            <Link to={'/home'}>
              {svgs.systemIcon.home}
              <p>Home</p>
            </Link>
          </li>
          <li id="about">
            <Link to={'/about'}>
              {svgs.systemIcon.user}
              <p>About</p>
            </Link>
          </li>
          <li id="portfolio">
            <Link to={'/portfolio'}>
              {svgs.systemIcon.book}
              <p>Portfolio</p>
            </Link>
          </li>
          <li id="blog">
            <Link to={'/blog'}>
              {svgs.systemIcon.article}
              <p>Blog</p>
            </Link>
          </li>
          <li id="contact">
            <Link to={'/contact'}>
              {svgs.systemIcon.mail}
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </C.NavDesktop>
    </C.MenuDesktop>
  );
};
