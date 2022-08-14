import * as C from './styles';

interface Props {
    name: string;
    src: string;
    alt: string;
    url: string;
}

export const Project = (props:Props) => {

    return (
        <C.Project>
            <img src={props.src} alt={props.alt} />
            <div className="project-info">
                <h3>{props.name}</h3>
                <a href={props.url}>View more</a>
            </div>
        </C.Project>
    );
}