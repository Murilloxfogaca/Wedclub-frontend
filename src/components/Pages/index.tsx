import { memo, useCallback } from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import AdminPage from './Admin';
import EspecificUser from './Detalhe';
import EditUser from './Edit';
import PublicPage from './Public';


const Pages = memo(() => {
  const renderRedirect = useCallback(() => <Redirect to='/login' />, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/nova-senha' exact component={PublicPage} />
        <Route path='/login' exact component={PublicPage} />
        <Route path='/admin' exact component={AdminPage} />
        <Route path="/admin/detalhe/:slug/" exact component={EspecificUser} />
        <Route path="/admin/edit/:slug/" exact component={EditUser} />

        <Route render={renderRedirect} />
      </Switch>
    </BrowserRouter>
  );
});

export default Pages;
