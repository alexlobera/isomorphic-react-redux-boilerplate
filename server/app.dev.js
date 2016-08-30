import webpack from 'webpack';
import express from 'express';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.dev.config';
import reactApp from './app';
import routes from './routes';

const compiler = webpack(config);
const app = express();
  
// hot reload
app.use(WebpackDevMiddleware(compiler, {
  noInfo: true,
  reload: true,
  publicPath: config.output.publicPath,
}));

app.use(WebpackHotMiddleware(compiler));

app.use(routes());

app.use(reactApp);

app.listen(config.port);
console.log(`Listening at http://${config.host}:${config.port}`);
