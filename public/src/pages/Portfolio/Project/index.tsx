import * as C from "./styles";
import { Link } from 'react-router-dom';

interface Props {
  name: string;
  src: string;
  alt: string;
  url: string;
}

export const Project = (props: Props) => {
  return (
    <C.Project>
      <img src={props.src} alt={props.alt} />
      <div className="project-info">
        <h3>{props.name}</h3>
        <Link to={`/portfolio/${props.url}`}>View more</Link>
      </div>
    </C.Project>
  );
};
