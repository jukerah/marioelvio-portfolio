import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { svgs } from "../../data/SvgList";
import { pageInfo } from "../../data/PageInfo";

interface Props {
  url: string;
}

export const BackButton = (props: Props) => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;
  const navigate = useNavigate();

  const handleBackButton = () => { navigate(`${props.url}`); }

  return (
    <C.BackButton
      mode={theme.mode.status}
      onClick={handleBackButton}
    >
      {svgs.systemIcon.back}
      <p>{pageInfo.button.back[ lang as keyof typeof pageInfo.button.back ]}</p>
    </C.BackButton>
  );
};
