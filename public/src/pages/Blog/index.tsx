import { useContext, useEffect } from "react";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { TitlePage } from "../../components/TitlePage";

export const BlogPage = (props: any) => {
  const { theme, dispatch } = useContext(Context);
  
  useEffect(() => {
    if (props.page === "blog") {
      window.scrollTo({ top: 0, behavior: "smooth" });

      dispatch({
        type: "CHANGE_ACTIVE_PAGE",
        payload: {
          status: props.page,
        },
      });
    }
  },[props.page, dispatch, theme.activePage.status]);

  return (
    <C.BlogSection mode={theme.mode.status}>
      <TitlePage title={'Blog'} />
      <h2>Site is under development, follow the news here or GitHub:</h2>
      <a href="https://github.com/jukerah/marioelvio-portfolio" target="_blank" rel="noopener noreferrer">
        https://github.com/jukerah/marioelvio-portfolio
      </a>
    </C.BlogSection>
  );
};
