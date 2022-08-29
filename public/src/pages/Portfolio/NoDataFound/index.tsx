import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { pageInfo } from "../../data/PageInfo";

export const NoDataFound = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  const noDataFound = {
    text: pageInfo.portfolio.project.noDataFound[ lang as keyof typeof pageInfo.portfolio.project.noDataFound ]
  }

  return (
    <C.NoDataFound mode={theme.mode.status}>
      {noDataFound.text}
    </C.NoDataFound>
  );
};
