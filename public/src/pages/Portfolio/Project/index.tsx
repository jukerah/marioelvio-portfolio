import * as C from "./styles";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

import { pageInfo } from "../../../data/PageData";

interface Props {
  name: string;
  src: string;
  alt: string;
  url: string;
}

export const Project = (props: Props) => {
  const { i18n } = useTranslation();

  return (
    <C.Project>
      <img src={props.src} alt={props.alt} />
      <div className="project-info">
        <h3>{props.name}</h3>
        <Link to={`/portfolio/${props.url}`}>{pageInfo.button.viewMore[ i18n.language as keyof typeof pageInfo.button.viewMore ]}</Link>
      </div>
    </C.Project>
  );
};
