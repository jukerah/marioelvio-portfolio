import { useRoutes } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { AboutPage } from '../pages/About';
import { PortfolioPage } from '../pages/Portfolio';
import { LoginPage } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { ContactPage } from '../pages/Contact';

export const RouteList = () => {
    return useRoutes([
        { path: '/', element: <HomePage page={'home'} /> },
        { path: '/home', element: <HomePage page={'home'} /> },
        { path: '/about', element: <AboutPage page={'about'} /> },
        { path: '/portfolio', element: <PortfolioPage /> },
        { path: '/contact', element: <ContactPage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '*', element: <NotFound /> }
    ]);
}