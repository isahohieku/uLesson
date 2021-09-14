import { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import StateProvider from '@context';
import Loading from '@components/Loader';
import WithSuspense from '@hocs/with-suspense';
import Home from "@pages/home";

const Routes = () => (
  <StateProvider>
    <Switch>
      <Route path="/" component={WithSuspense(Home, Loading)} exact />
    </Switch>
  </StateProvider>
);

export default Routes;
