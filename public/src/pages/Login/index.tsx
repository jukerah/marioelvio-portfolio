import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import * as C from './styles';

export const LoginPage = (props:any) => {
    const loginPage = useRef(props.linkScroll);
    const { t } = useTranslation();
    
    useEffect(() => {
        if (props.linkScroll === 'home') {           
            loginPage.current.scrollIntoView({ behavior: 'smooth'})
        }
    }, [props.linkScroll]);

    return (        
        <C.LoginSection ref={loginPage}>
            <h1>{t('development')}</h1>
            <a href="https://github.com/jukerah/marioelvio-portfolio" target="_blank" rel="noopener noreferrer">https://github.com/jukerah/marioelvio-portfolio</a>
        </C.LoginSection>
    );
};