import { useContext, useEffect } from "react";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { pageInfo } from "../../data/PageInfo";

interface Props {
  page: string;
}


export const NotFound = (props: Props) => {
  const { theme, dispatch } = useContext(Context);
  const lang: string = theme.lang.status;

  const notFound = {
    title: pageInfo.notFound.pageTitle[ lang as keyof typeof pageInfo.notFound.pageTitle ],
    text: pageInfo.notFound.text[ lang as keyof typeof pageInfo.notFound.text ],
  }

  useEffect(() => {
    if (props.page === "notFound") {
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
    <C.NotFound mode={theme.mode.status}>
      <C.Container mode={theme.mode.status}>
        <h1>{notFound.title}</h1>
        <p>{notFound.text}</p>
      </C.Container>
    </C.NotFound>
  );
};
