import { useRoutes } from 'react-router-dom';
import { Main } from '../pages/Main';
import { NotFound } from '../pages/NotFound';

export const RouteList = () => {
    return useRoutes([
        { path: '/', element: <Main /> },
        { path: '/home', element: <Main /> },
        { path: '/about', element: <Main /> },
        { path: '/portfolio', element: <Main /> },
        { path: '/contato', element: <Main /> },
        { path: '*', element: <NotFound /> }
    ]);
}