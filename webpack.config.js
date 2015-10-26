var sGrid = require('s-grid');
var rupture = require('rupture');
var autoprefixerStylus = require('autoprefixer-stylus');
var path = require('path');
var webpack = require('webpack');

require('es6-promise').polyfill();

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './app/App.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel', 'eslint-loader']
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
