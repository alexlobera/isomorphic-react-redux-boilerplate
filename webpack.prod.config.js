import webpack from 'webpack';
import base from './webpack.base';

base.devtool = 'source-map';
base.plugins = base.plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
      comments: false
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: "'production'"
    }
  })
]);

export default base;
