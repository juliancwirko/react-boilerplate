var config = require('./webpack.config.js');

config.devtool = 'source-maps';
config.output.pathinfo = false;
config.entry = ['./app/App.js'];

module.exports = config;