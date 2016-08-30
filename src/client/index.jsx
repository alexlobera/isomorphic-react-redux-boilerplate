if (module.hot) { module.hot.accept() }

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import Root from '../shared/components/Root';
import routes from '../shared/routes';
import configureStore from '../shared/store/configureStore';

const store = configureStore(window.__store_initial_state__);

render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('app')
);
