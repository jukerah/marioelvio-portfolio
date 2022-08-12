import { useContext, useEffect } from 'react';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';
import { TitlePage } from '../../components/TitlePage';
import { pageInfo } from '../../data/PageData';
import { Resume } from './Resume';
import { MyInterests } from './MyInterests';
import { PersonalDetails } from './PersonalDetails';
import { DownloadButton } from './DownloadButton';
import { TimeLine } from './TimeLine';
import { SoftSkills } from './softSkills';
import { HardSkills } from './HardSkills';
import { Footer } from '../../components/Footer';

export const AboutPage = (props:any) => {
    const { theme } = useContext(Context);

    useEffect(() => {
        if (props.page === 'about') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [props.page]);

    return (        
        <C.AboutSection mode={theme.mode.status}>
            <C.Container>
                <TitlePage title={'About'}/>

                <Resume
                    title={pageInfo.about.personalResume.title}
                    description={pageInfo.about.personalResume.resume}
                />

                <Resume
                    title={pageInfo.about.professionalResume.title}
                    description={pageInfo.about.professionalResume.resume}
                />

                <MyInterests />

                <PersonalDetails />

                <DownloadButton />

                <TimeLine />

                <SoftSkills />

                <HardSkills />

                <DownloadButton />
            </C.Container>
            <Footer />
        </C.AboutSection>
        
    );
};