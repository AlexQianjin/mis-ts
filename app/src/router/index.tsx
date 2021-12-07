import type { RouteObject } from 'react-router';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import NoMatch from '../pages/NoMatch';

const Routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            { path: '*', element: <NoMatch /> }
        ]
    }
];
export default Routes;
