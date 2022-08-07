import { useContext, useEffect } from 'react';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';
import { TitlePage } from '../../components/TitlePage';
import { pageInfo } from '../../data/PageData';
import { Resume } from './Resume';
import { MyInterests } from './MyInterests';
import { PersonalDetails } from './PersonalDetails';
import { DownloadButton } from './DownloadButton';

export const AboutPage = (props:any) => {
    const { theme } = useContext(Context);

    useEffect(() => {
        if (props.page === 'about') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [props.page]);

    return (        
        <C.AboutSection
            mode={theme.mode.status}
        >
            <C.Container>
                <TitlePage
                    title={'About'}
                />

                <Resume
                    title={pageInfo.about.personalResume.title}
                    description={pageInfo.about.personalResume.resume}
                />

                <Resume
                    title={pageInfo.about.professionalResume.title}
                    description={pageInfo.about.professionalResume.resume}
                />

                <MyInterests
                    title={pageInfo.about.myInterests.title}
                    interestList={pageInfo.about.myInterests}
                />

                <PersonalDetails
                    title={pageInfo.about.personalDetails.title}
                    phone={pageInfo.about.personalDetails.phone}
                    email={pageInfo.about.personalDetails.email}
                    address={pageInfo.about.personalDetails.address}
                    linkedinUrl={pageInfo.about.personalDetails.linkedin.url}
                    linkedinText={pageInfo.about.personalDetails.linkedin.text}
                    githubUrl={pageInfo.about.personalDetails.github.url}
                    githubText={pageInfo.about.personalDetails.github.text}
                    youtubeUrl={pageInfo.about.personalDetails.youtube.url}
                    youtubeText={pageInfo.about.personalDetails.youtube.text}
                />

                <DownloadButton />
            </C.Container>
        </C.AboutSection>
        
    );
};