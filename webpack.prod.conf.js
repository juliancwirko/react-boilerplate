var webpack = require('webpack');
var config = require('./webpack.config.js');


config.devtool = 'source-maps';
config.output.pathinfo = false;
config.entry = ['./app/App.js'];
config.plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
];

module.exports = config;