import { useContext, useEffect } from "react";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";

interface Props {
  page: string;
}

export const NotFound = (props: Props) => {
  const { theme, dispatch } = useContext(Context);

  useEffect(() => {
    if (props.page === "notFound") {
      window.scrollTo({ top: 0, behavior: "smooth" });

      dispatch({
        type: "CHANGE_ACTIVE_PAGE",
        payload: {
          status: "",
        },
      });
    }
  },[props.page, dispatch, theme.activePage.status]);  

  return (
    <C.NotFound mode={theme.mode.status}>
      <C.Container mode={theme.mode.status}>
        <h1>Error 404</h1>
        <p>Oops! Page not found.</p>
      </C.Container>
    </C.NotFound>
  );
};
