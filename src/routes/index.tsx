import { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import StateProvider from '@context';
import Loading from '@components/Loader';
import WithSuspense from '@hocs/with-suspense';

const Home = lazy(() => import('@pages/home'));
const Lessons = lazy(() => import('@pages/lessons'));

const Routes = () => (
  <StateProvider>
    <Switch>
      <Route path="/" component={WithSuspense(Home, Loading)} exact />
      <Route path="/lessons" component={WithSuspense(Lessons, Loading)} />
    </Switch>
  </StateProvider>
);

export default Routes;
