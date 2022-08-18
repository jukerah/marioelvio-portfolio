import { useRoutes } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { AboutPage } from '../pages/About';
import { PortfolioPage } from '../pages/Portfolio';
import { ProjectPage } from '../pages/Project';
import { LoginPage } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { BlogPage } from '../pages/Blog';
import { ContactPage } from '../pages/Contact';

export const RouteList = () => {
    return useRoutes([
        { path: '/', element: <HomePage page={'home'} /> },
        { path: '/home', element: <HomePage page={'home'} /> },
        { path: '/about', element: <AboutPage page={'about'} /> },
        { path: '/portfolio', element: <PortfolioPage page={'portfolio'} /> },
        { path: '/portfolio/:slug', element: <ProjectPage page={'project'} /> },
        { path: '/blog', element: <BlogPage page={'blog'} /> },
        { path: '/contact', element: <ContactPage page={'contact'} /> },
        { path: '/login', element: <LoginPage page={'login'} /> },
        { path: '*', element: <NotFound /> }
    ]);
}