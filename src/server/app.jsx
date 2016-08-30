import React from 'react';
import { RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import routes from '../shared/routes';
import configureStore from '../shared/store/configureStore';

const reactApp = (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const initialState = res.storeInitiaState;
      const InitialComponent = (
        <RouterContext {...renderProps} />
      );
      const componentHTML = renderToString(InitialComponent);
      const HTML = `
        <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>Isomorphic Redux workshop | javaScript Lab London</title>
              <script>
                window.__store_initial_state__ = ${JSON.stringify(initialState)};
              </script>
            </head>
            <body>
              <div id="app">${componentHTML}</div>
              <script type="application/javascript" src="/bundle.js"></script>
            </body>
        </html>
      `;
      res.status(200).send(HTML)
    } else {
      res.status(404).send('Not found')
    }
  });
} 

export default reactApp;
