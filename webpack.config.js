var sGrid = require('s-grid');
var rupture = require('rupture');
var autoprefixerStylus = require('autoprefixer-stylus');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/App.js',
    output: {
        filename: 'public/bundle.js'
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
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
            }
        ]
    },
    eslint: {
        configFile: '.eslintrc'
    },
    stylus: {
        use: [sGrid(), rupture(), autoprefixerStylus()]
    },
    plugins: [
        new ExtractTextPlugin('public/style.css', {
            allChunks: true
        })
    ]
};
