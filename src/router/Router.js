import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/Home'));

const Router = () => {
  const routes = useRoutes([{ path: '/', element: <Home /> }]);

  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
};

export default Router;
