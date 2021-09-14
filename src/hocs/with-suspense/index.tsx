import { Suspense } from 'react';

const WithSuspense = (Component, Loading = null) => props => (
  <Suspense fallback={Loading && <Loading />}>
    <Component {...props} />
  </Suspense>
);

export default WithSuspense;
