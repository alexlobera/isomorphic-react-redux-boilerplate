import React     from 'react';
import { Route } from 'react-router';
import App from '../components/App';
import Page from '../components/Page';
import PhotosContainer from '../containers/PhotosContainer';
import { path } from './config';

export default (
  <Route>
    <Route component={App} path={path.root} />
    <Route component={Page} path="/test" />
    <Route component={PhotosContainer} path={path.photos} />
    <Route component={PhotosContainer} path={path.posts}>
      <Route component={PhotosContainer} path={path.posts_id} />
    </Route>
  </Route>
);
