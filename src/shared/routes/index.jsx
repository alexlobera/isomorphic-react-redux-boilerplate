import React     from 'react';
import { Route } from 'react-router';
import App from '../components/App';
import PhotosContainer from '../containers/PhotosContainer';
import { path } from './config';

export default (
  <Route>
    <Route component={App} path={path.root} />
    <Route component={PhotosContainer} path={path.test} />
  </Route>
);
