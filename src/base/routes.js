import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../modules/app/container';
import HomePage from '../modules/home/container';
import Client from '../modules/client/container';
import NoFoundPage from '../modules/page404/container';

const routes = (
  <Route path="/" component={App}>

    {/* 主页 */}
    <IndexRoute component={HomePage} />

    {/* 客户 */}
    <Route path="/client" component={Client}>
    </Route>

    {/* 404 */}
    <Route path="*" component={NoFoundPage} />
    
  </Route>
);

export default routes;
