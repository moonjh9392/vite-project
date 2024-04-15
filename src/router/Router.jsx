import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Home = lazy(() => import('./home'));

const Router = () => {
  const routes = useRoutes([{ path: '/', element: <Home /> }]);
  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
};

export default Router;
