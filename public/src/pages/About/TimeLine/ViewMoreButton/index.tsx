import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";
import { svgs } from "../../../../data/SvgList";

interface Props {
  showAll(): void;
}

export const ViewMoreButton = (props: Props) => {
  const { theme } = useContext(Context);

  return (
    <C.ViewMoreButton
      mode={theme.mode.status}
      onClick={props.showAll}
    >
      <p>view more</p>
      {svgs.systemIcon.chevronDown}
    </C.ViewMoreButton>
  );
};
