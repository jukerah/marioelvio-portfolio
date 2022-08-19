import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";

interface Props {
  title: string;
}

export const TitlePage = (props: Props) => {
  const { theme } = useContext(Context);

  return (
    <C.ContainerTitle>
      <C.TitlePage mode={theme.mode.status}>
        {props.title}
      </C.TitlePage>
    </C.ContainerTitle>
  );
};
