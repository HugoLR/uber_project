import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import Login from '../containers/Login';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={NotFound} />
        <Route exact path="/login" component={Login}/>
        <Route component={NotFound} />
      </Switch>
    </Layout>
    
  </BrowserRouter>
);

export default App;