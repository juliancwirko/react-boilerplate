var sGrid = require('s-grid');
var rupture = require('rupture');
var autoprefixerStylus = require('autoprefixer-stylus');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './app/App.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000,
        contentBase: './public',
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'eslint-loader'
            },
            {
                test: /\.styl$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'style!css-loader!stylus-loader'
            }
        ]
    },
    eslint: {
        configFile: '.eslintrc'
    },
    stylus: {
        use: [sGrid(), rupture(), autoprefixerStylus()]
    }
};
