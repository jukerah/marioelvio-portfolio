import { useRoutes } from 'react-router-dom';

import { Main } from '../pages/Main';
import { ProjectPage } from '../pages/Project';
import { LoginPage } from '../pages/Login';
import { NotFound } from '../pages/NotFound';

export const RouteList = () => {
    return useRoutes([
        { path: '/', element: <Main page={'home'} isActivedHomePage={'home'} /> },
        { path: '/home', element: <Main page={'home'} isActivedHomePage={'home'} /> },
        { path: '/about', element: <Main page={'about'} /> },
        { path: '/portfolio', element: <Main page={'portfolio'} /> },
        { path: '/portfolio/:slug', element: <ProjectPage page={'project'} /> },
        { path: '/contact', element: <Main page={'contact'} /> },
        { path: '/login', element: <LoginPage page={'login'} /> },
        { path: '*', element: <NotFound page={'notFound'} /> }
    ]);
}