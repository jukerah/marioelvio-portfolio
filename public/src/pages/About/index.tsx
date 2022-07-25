import { useTranslation } from 'react-i18next';
import * as C from './styles';

export const AboutPage = () => {
    const { t } = useTranslation();   

    return (        
        <C.AboutSection>
            <h1>{t('page.about.title')}</h1>
        </C.AboutSection>
    );
};