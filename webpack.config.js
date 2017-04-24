const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/favicon.ico',
      template: './index_template.ejs',
      inject: 'body',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [
        { loader: 'babel-loader' },
      ],
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.global\.scss$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          modules: false,
          sourceMap: true,
          importLoaders: 1,
        },
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: () => [autoprefixer],
        },
      }, {
        loader: 'sass-loader',
      }],
    }, {
      test: /^((?!\.global).)*scss$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]__[hash:base64:5]',
        },
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: () => [autoprefixer({
            browsers: [
              'last 4 versions',
            ],
          })],
        },
      }, {
        loader: 'sass-loader',
      }],
    }, {
      test: /\.(png|jpg|gif)$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'url-loader?name=images/[name].[ext]&limit=8192',
      }],
    }],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.png', '.jpg', '.jpeg', '.gif'],
  },
};
