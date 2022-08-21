import { useEffect, useContext } from "react";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { TitlePage } from "../../components/TitlePage";

export const LoginPage = (props: any) => {
  const { theme } = useContext(Context);

  useEffect(() => {
    if (props.page === "login") window.scrollTo({ top: 0, behavior: "smooth" });
  }, [props.page]);

  return (
    <C.LoginSection mode={theme.mode.status}>
      <TitlePage title={'Login'} />
      <h2>Site is under development, follow the news here or GitHub:</h2>
      <a href="https://github.com/jukerah/marioelvio-portfolio" target="_blank" rel="noopener noreferrer">
        https://github.com/jukerah/marioelvio-portfolio
      </a>
    </C.LoginSection>
  );
};
