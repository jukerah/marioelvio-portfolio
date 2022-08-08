import { useContext } from 'react';
import * as C from './styles';

import { Context } from '../../../contexts/Contexts';
import { SubTitle } from '../../../components/SubTitle';
import { svgs } from '../../../data/SvgList';

interface Props {
    title: string;
    phone: string;
    email: string;
    address: string;
    linkedinUrl: string;
    linkedinText: string;
    githubUrl: string;
    githubText: string;
    youtubeUrl: string;
    youtubeText: string;
}

export const PersonalDetails = (props:Props) => {
    const { theme } = useContext(Context);

    return (        
        <C.PersonalDetails
            mode={theme.mode.status}
            isMenuOpen={theme.isMenuOpen.status}
        >
            <SubTitle subTitle={props.title} />
            
            <div className='container-info'>
                <div>
                    <figure>
                        <img src={(theme.mode.status === 'dark')
                                ? svgs.systemIcon.phone.light
                                : svgs.systemIcon.phone.dark
                            }
                            alt={svgs.systemIcon.phone.alt}
                        />
                        <figcaption>
                            <a 
                                href={`tel:${props.phone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {props.phone}
                            </a>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={(theme.mode.status === 'dark')
                                ? svgs.systemIcon.mail.light
                                : svgs.systemIcon.mail.dark
                            }
                            alt={svgs.systemIcon.mail.alt}
                        />
                        <figcaption>
                            <a
                                href={`mailto:${props.email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {props.email}
                            </a>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={(theme.mode.status === 'dark')
                                ? svgs.systemIcon.mapPin.light
                                : svgs.systemIcon.mapPin.dark
                            }
                            alt={svgs.systemIcon.mapPin.alt}
                        />
                        <figcaption>
                            {props.address}
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src={(theme.mode.status === 'dark')
                                ? svgs.systemIcon.linkedin.light
                                : svgs.systemIcon.linkedin.dark
                            }
                            alt={svgs.systemIcon.linkedin.alt}
                        />
                        <figcaption>
                            <a
                                href={props.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {props.linkedinText}
                            </a>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={(theme.mode.status === 'dark')
                                ? svgs.systemIcon.github.light
                                : svgs.systemIcon.github.dark
                            }
                            alt={svgs.systemIcon.github.alt}
                        />
                        <figcaption>
                            <a
                                href={props.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {props.githubText}
                            </a>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={(theme.mode.status === 'dark')
                                ? svgs.systemIcon.youtube.light
                                : svgs.systemIcon.youtube.dark
                            }
                            alt={svgs.systemIcon.youtube.alt}
                        />
                        <figcaption>
                            <a
                                href={props.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {props.youtubeText}
                            </a>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </C.PersonalDetails>        
    );
};