const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: `${path.resolve(__dirname, 'src')}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    port: 4000,
  },
  plugins: [new HTMLWebpackPlugin({
    template: `${path.resolve(__dirname, 'src')}/index.html`,
  })],
};
