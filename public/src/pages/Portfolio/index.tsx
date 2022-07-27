import { useTranslation } from 'react-i18next';
import * as C from './styles';

export const PortfolioPage = () => {
    const { t } = useTranslation();   

    return (        
        <C.PortfolioSection>
            <h1>{t('page.portfolio.name')}</h1>
        </C.PortfolioSection>
    );
};