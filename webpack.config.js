const path = require('path');
const webpack = require('webpack');
// const NpmInstallPlugin = require('npm-install-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  plugins: [
    // new NpmInstallPlugin({
    //   save: true, // --save
    //   yarn: true
    // })
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  entry: {
    'material-ui': path.join(__dirname, './src/index.js'),
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
    },
    {
      test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    stats: {
      chunks: false,
    },
    clientLogLevel: 'warning',
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 3001,
  }
};
