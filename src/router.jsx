import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Movies from "./views/Movies";
import Serials from "./views/Serials";
import Animes from "./views/Animes";
import NotFound from "./views/NotFound";
import Layout from "./Layout/Layout";
import MovieDetail from "./views/MovieDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/movies',
                element: <Movies />
            },
            {
                path: '/serials',
                element: <Serials />
            },
            {
                path: '/animes',
                element: <Animes />
            },
            {
                path: '/:slug',
                element: <MovieDetail />
            },
        ]
    },
    
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router