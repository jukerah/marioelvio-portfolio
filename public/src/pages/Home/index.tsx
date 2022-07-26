import { useTranslation } from 'react-i18next';
import * as C from './styles';

export const HomePage = () => {
    const { t } = useTranslation();
    
    return (        
        <C.HomeSection>
            <h1>{t('page.home.title')}</h1>                                
        </C.HomeSection>
    );
};