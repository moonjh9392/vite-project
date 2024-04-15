import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import Loading from '../components/common/Loading';

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Router = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '*', element: <NotFound /> }, // 모든 미정의 경로에 대해 NotFound 컴포넌트를 렌더링
  ]);

  return <Suspense fallback={<Loading />}>{routes}</Suspense>;
};

export default Router;
