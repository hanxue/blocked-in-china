const path = require('path');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  plugins: [
    new NpmInstallPlugin({
      save: true, // --save
      yarn: true
    })
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
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
    }, {
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
  }
};
