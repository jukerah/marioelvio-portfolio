import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { svgs } from "../../data/SvgList";
import { pageInfo } from "../../data/PageData";

interface Props {
  url: string;
}

export const BackButton = (props: Props) => {
  const { theme } = useContext(Context);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const handleBackButton = () => { navigate(`${props.url}`); }

  return (
    <C.BackButton
      mode={theme.mode.status}
      onClick={handleBackButton}
    >
      {svgs.systemIcon.back}
      <p>{pageInfo.button.back[ i18n.language as keyof typeof pageInfo.button.back ]}</p>
    </C.BackButton>
  );
};
