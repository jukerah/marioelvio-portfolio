import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";
import { svgs } from "../../../../data/SvgList";
import { pageInfo } from "../../../../data/PageInfo";

interface Props {
  showAll(): void;
}

export const ViewMoreButton = (props: Props) => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  const button = {
    text: pageInfo.button.viewMore[ lang as keyof typeof pageInfo.button.viewMore ],
  }

  return (
    <C.ViewMoreButton
      mode={theme.mode.status}
      onClick={props.showAll}
    >
      <p>{button.text}</p>
      {svgs.systemIcon.chevronDown}
    </C.ViewMoreButton>
  );
};
