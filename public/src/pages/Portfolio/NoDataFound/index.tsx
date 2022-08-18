import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";

export const NoDataFound = () => {
  const { theme } = useContext(Context);

  return (
    <C.NoDataFound mode={theme.mode.status}>
      No data found.
    </C.NoDataFound>
  );
};
