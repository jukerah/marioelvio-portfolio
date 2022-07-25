import { useRoutes } from 'react-router-dom';
import { Main } from '../pages/Main';
import { LoginPage } from '../pages/Login';
import { NotFound } from '../pages/NotFound';

export const RouteList = () => {
    return useRoutes([
        { path: '/', element: <Main /> },
        { path: '/home', element: <Main /> },
        { path: '/about', element: <Main /> },
        { path: '/portfolio', element: <Main /> },
        { path: '/portfolio', element: <Main /> },
        { path: '/contact', element: <Main /> },
        { path: '/login', element: <LoginPage /> },
        { path: '*', element: <NotFound /> }
    ]);
}