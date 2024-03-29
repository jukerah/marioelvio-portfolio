import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";

interface Props {
  content: React.ReactNode;
  key: number;
}

export const Card = (props: Props) => {
  const { theme } = useContext(Context);

  return (
    <C.Card mode={theme.mode.status}>
      {props.content}
    </C.Card>
  );
};
