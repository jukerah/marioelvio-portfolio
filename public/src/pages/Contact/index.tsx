import { useTranslation } from 'react-i18next';
import * as C from './styles';

export const ContactPage = () => {
    const { t } = useTranslation();   

    return (        
        <C.ContactSection>
            <h1>{t('page.contact.title')}</h1>
        </C.ContactSection>
    );
};