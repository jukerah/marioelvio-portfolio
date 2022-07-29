import { useTranslation } from 'react-i18next';
import * as C from './styles';

import { HomePage } from '../../pages/Home';
import { AboutPage } from '../../pages/About';
import { PortfolioPage } from '../../pages/Portfolio';
import { ContactPage } from '../Contact';

export const Main = () => {
    const { t } = useTranslation();

    return (
        <C.Main>
            <HomePage /*linkScroll={props.page}*/ />
            
            <h2>{t('development')}</h2>
            <a href="https://github.com/jukerah/marioelvio-portfolio" target="_blank" rel="noopener noreferrer">https://github.com/jukerah/marioelvio-portfolio</a>

            <AboutPage /*linkScroll={props.page}*/ />
            <PortfolioPage /*linkScroll={props.page}*/ />
            <ContactPage /*linkScroll={props.page}*/ />
        </C.Main>
    );
}