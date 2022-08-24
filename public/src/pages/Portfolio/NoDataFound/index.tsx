import { useContext } from "react";
import { useTranslation } from "react-i18next";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { pageInfo } from "../../../data/PageData";

export const NoDataFound = () => {
  const { theme } = useContext(Context);
  const { i18n } = useTranslation();

  return (
    <C.NoDataFound mode={theme.mode.status}>
      {pageInfo.portfolio.project.noDataFound[ i18n.language as keyof typeof pageInfo.portfolio.project.noDataFound ]}
    </C.NoDataFound>
  );
};
