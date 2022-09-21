import { useContext } from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { pageInfo } from "../../data/PageInfo";
import { svgs } from "../../data/SvgList";

export const MenuDesktop = () => {
  const { theme, dispatch } = useContext(Context);
  const lang: string = theme.lang.status;

  const menu = {
    home: pageInfo.home.pageTitle[ lang as keyof typeof pageInfo.home.pageTitle ],
    about: pageInfo.about.pageTitle[ lang as keyof typeof pageInfo.about.pageTitle ],
    portfolio: pageInfo.portfolio.pageTitle[ lang as keyof typeof pageInfo.portfolio.pageTitle ],
    blog: pageInfo.blog.pageTitle[ lang as keyof typeof pageInfo.blog.pageTitle ],
    contact: pageInfo.contact.pageTitle[ lang as keyof typeof pageInfo.contact.pageTitle ]
  }

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
              <p>{menu.home}</p>
            </Link>
          </li>
          <li id="about">
            <Link to={'/about'}>
              {svgs.systemIcon.user}
              <p>{menu.about}</p>
            </Link>
          </li>
          <li id="portfolio">
            <Link to={'/portfolio'}>
              {svgs.systemIcon.book}
              <p>{menu.portfolio}</p>
            </Link>
          </li>
          <li id="contact">
            <Link to={'/contact'}>
              {svgs.systemIcon.mail}
              <p>{menu.contact}</p>
            </Link>
          </li>
        </ul>
      </C.NavDesktop>
    </C.MenuDesktop>
  );
};
