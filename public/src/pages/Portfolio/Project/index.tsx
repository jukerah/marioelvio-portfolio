import { useContext } from "react";
import { Link } from 'react-router-dom';
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { pageData } from "../../../data/PageData";

interface Props {
  name: string;
  src: string;
  alt: string;
  url: string;
}

export const Project = (props: Props) => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  return (
    <C.Project>
      <img src={props.src} alt={props.alt} />
      <div className="project-info">
        <h3>{props.name}</h3>
        <Link to={`/portfolio/${props.url}`}>{pageData.button.viewMore[lang]}</Link>
      </div>
    </C.Project>
  );
};
