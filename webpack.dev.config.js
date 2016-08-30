import webpack from 'webpack';
import base from './webpack.base';

base.host = 'localhost';
base.port = 3456;

base.devtool = 'source-map';
base.entry = [
  'webpack-hot-middleware/client',
].concat(base.entry);

base.plugins = base.plugins.concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
]);

export default base;
