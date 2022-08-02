import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';
import { TitlePage } from '../../components/TitlePage';

export const PortfolioPage = (props:any) => {
    const { t } = useTranslation();
    const { theme } = useContext(Context);

    useEffect(() => {
        if (props.page === 'portfolio') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [props.page]);

    return (        
        <C.PortfolioSection
            mode={theme.mode.status}
        >
            <TitlePage 
                title={t('page.portfolio.name')}
            />
            <h2>{t('development')}</h2>
            <a href="https://github.com/jukerah/marioelvio-portfolio" target="_blank" rel="noopener noreferrer">https://github.com/jukerah/marioelvio-portfolio</a>
        </C.PortfolioSection>
    );
};