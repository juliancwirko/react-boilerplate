var path = require('path');
var sGrid = require('s-grid');
var rupture = require('rupture');
var autoprefixer = require('autoprefixer');

module.exports = {
    output: {
        // YOU NEED TO SET libraryTarget: 'commonjs2'
        libraryTarget: 'commonjs2',
    },
    module: {
        loaders: [{
            test: /\.styl$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss!stylus-loader'
        }, {
            test: /\.(png|jpg)$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'url-loader?name=images/[name].[ext]&limit=8192'
        }],
    },
    resolve: {
        root: path.join(__dirname, '..', 'app'),
        extensions: ['', '.js', '.jsx', '.json', '.css', '.styl', '.png', '.jpg', '.jpeg', '.gif']
    },
    stylus: function () {
        return [sGrid, rupture]
    },
    postcss: function () {
        return [autoprefixer];
    }
};
