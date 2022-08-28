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

  const project = {
    name: props.name,
    button: pageData.button.viewMore[ lang as keyof typeof pageData.button.viewMore ],
    img: {
      src: props.src,
      alt: props.alt
    },
    url: props.url
  }

  return (
    <C.Project>
      <img src={project.img.src} alt={project.img.alt} />
      <div className="project-info">
        <h3>{project.name}</h3>
        <Link to={`/portfolio/${project.url}`}>{project.button}</Link>
      </div>
    </C.Project>
  );
};
