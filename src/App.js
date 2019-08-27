import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import store  from './store';
import { Provider } from 'react-redux';
import MeHeader from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import Register from './pages/register';
import Download from './pages/downloadApp';
import SearchResult from './pages/searchResult';
import ResetPassword from './pages/resetPassword';
import Follow from './pages/follow';
import Comments from './pages/comments';
import Writer from './pages/writer';
import { GlobalStyle } from './reset';

export default () => (
  <Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <MeHeader />
        <Route path="/follow" component={Follow} />
        <Route path="/comments/:name" component={Comments} />
        <Route path="/search" component={SearchResult} />
        <Route path="/download" component={Download} />
        <Route path="/login" component={Login} />
        <Route path="/write" component={Write} />
        <Route path="/register" component={Register} />
        <Route path="/reset_password/:name" component={ResetPassword} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route path="/writer" exact component={Writer} />
        <Route path="/" exact component={Home} />
      </BrowserRouter>
    </Provider>
  </Fragment>
);
