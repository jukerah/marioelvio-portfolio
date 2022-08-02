import { useContext, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';
import { TitlePage } from '../../components/TitlePage';

export const ContactPage = (props:any) => {
    const aboutPage = useRef(props.page);
    const { t } = useTranslation();
    const { theme } = useContext(Context);

    useEffect(() => {
        if (props.page === 'contact') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [props.page]);

    return (        
        <C.ContactSection
            ref={aboutPage}
            mode={theme.mode.status}
        >
            <TitlePage 
                title={t('page.contact.name')}
            />
        </C.ContactSection>
    );
};