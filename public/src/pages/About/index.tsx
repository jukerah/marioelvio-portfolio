import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';
import { TitlePage } from '../../components/TitlePage';
import { SubTitle } from '../../components/SubTitle';
import { svgs } from '../../data/SvgList';
import { CardTech } from '../../components/CardTech';

export const AboutPage = (props:any) => {
    const { t, i18n } = useTranslation();
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
                    title={t('page.about.name')}
                />

                <C.ContainerResume
                    mode={theme.mode.status}
                >
                    <SubTitle 
                        subTitle={t('page.about.personalResume.title')}
                    />
                    <p>{t('page.about.personalResume.description')}</p>
                </C.ContainerResume>

                <C.ContainerResume
                    mode={theme.mode.status}
                >
                    <SubTitle 
                        subTitle={t('page.about.professionalResume.title')}
                    />
                    <p>{t('page.about.professionalResume.description')}</p>
                </C.ContainerResume>

                <C.ContainerMyInterests
                    mode={theme.mode.status}
                >
                    <SubTitle 
                        subTitle={t('page.about.myInterests.title')}
                    />

                    <div className='grid'>
                        {svgs.technologies.map((tech:any) => (
                            <CardTech
                                key={tech.id}
                                src={tech.img.light}
                                srcHover={tech.img.primary}
                                alt={tech.img.alt[i18n.language]}
                                tech={tech.name}
                            />
                        ))}
                    </div>        

                </C.ContainerMyInterests>
            </C.Container>
        </C.AboutSection>
        
    );
};