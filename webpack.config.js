var sGrid = require('s-grid');
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
                test: /\.styl$/,
                exclude: /(node_modules|bower_components)/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
            }
        ]
    },
    stylus: {
        use: [sGrid(), autoprefixerStylus()]
    },
    plugins: [
        new ExtractTextPlugin('public/style.css', {
            allChunks: true
        })
    ]
};
