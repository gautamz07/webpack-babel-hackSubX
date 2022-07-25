const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared'
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'shared'
    },
    shared: 'lodash' 
  },
  devServer: {
    static: './dist',
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  // The optimization.runtimeChunk: 'single' was added because in this 
  // example we have more than one entrypoint on a single HTML page. 
  // Without this, we could get into trouble described here. 
  // Read the Code Splitting chapter for more details.
  optimization: {
    runtimeChunk: 'single',
  },
};