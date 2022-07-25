import { useTranslation } from 'react-i18next';
import * as C from './styles';

export const HomePage = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng:string) => {
        i18n.changeLanguage(lng);
    };
    
    return (        
        <C.HomeSection>
            <h1>{t('page.home.title')}</h1>
            <button  type="button" onClick={() => changeLanguage('pt')}>
                pt
            </button>
            <button type="button" onClick={() => changeLanguage('en')}>
                en
            </button>                     
        </C.HomeSection>
    );
};