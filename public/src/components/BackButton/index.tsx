import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { svgs } from "../../data/SvgList";

interface Props {
  url: string;
}

export const BackButton = (props: Props) => {
  const { theme } = useContext(Context);
  const navigate = useNavigate();

  const handleBackButton = () => { navigate(`${props.url}`); }

  return (
    <C.BackButton
      mode={theme.mode.status}
      onClick={handleBackButton}
    >
      {svgs.systemIcon.back}
      <p>Back</p>
    </C.BackButton>
  );
};
