var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var compiler = webpack(config);

new WebpackDevServer(compiler, {
    contentBase: './public',
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3000, 'localhost', function(err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:3000');
});
