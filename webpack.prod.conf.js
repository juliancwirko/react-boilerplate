var webpack = require('webpack');
var config = require('./webpack.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var productionPlugin = new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
});

config.devtool = 'source-maps';
config.output.pathinfo = false;
config.entry = ['./app/App.js'];
config.plugins.unshift(productionPlugin);

module.exports = config;