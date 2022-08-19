import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";

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
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 6L9 12L15 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      <p>Back</p>
    </C.BackButton>
  );
};
