import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { pageData } from "../../../data/PageData";

export const NoDataFound = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  return (
    <C.NoDataFound mode={theme.mode.status}>
      {pageData.portfolio.project.noDataFound[lang]}
    </C.NoDataFound>
  );
};
