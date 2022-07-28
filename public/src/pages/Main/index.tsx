import * as C from './styles';

import { HomePage } from '../../pages/Home';
import { AboutPage } from '../../pages/About';
import { PortfolioPage } from '../../pages/Portfolio';
import { ContactPage } from '../Contact';

export const Main = () => {
    return (
        <C.Main>
            <HomePage /*linkScroll={props.page}*/ />
            <AboutPage /*linkScroll={props.page}*/ />
            <PortfolioPage /*linkScroll={props.page}*/ />
            <ContactPage /*linkScroll={props.page}*/ />
        </C.Main>
    );
}

//<h1>{t('development')}</h1>
//<a href="https://github.com/jukerah/marioelvio-portfolio" target="_blank" rel="noopener noreferrer">https://github.com/jukerah/marioelvio-portfolio</a>
            