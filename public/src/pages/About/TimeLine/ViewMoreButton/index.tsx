import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";
import { svgs } from "../../../../data/SvgList";
import { pageData } from "../../../../data/PageData";

interface Props {
  showAll(): void;
}

export const ViewMoreButton = (props: Props) => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  return (
    <C.ViewMoreButton
      mode={theme.mode.status}
      onClick={props.showAll}
    >
      <p>{pageData.button.viewMore[lang]}</p>
      {svgs.systemIcon.chevronDown}
    </C.ViewMoreButton>
  );
};
