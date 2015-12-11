var babelJest = require('babel-jest');
var webpackAlias = require('jest-webpack-alias');

module.exports = {
    process: function(src, filename) {
        // ignore styles and images imports
        if ((/\.(gif|jpg|jpeg|tiff|png|css|styl|less|scss)$/i).test(path.basename(filename))) {
            return '';
        }
        if (filename.indexOf('node_modules') === -1) {
            src = babelJest.process(src, filename);
            src = webpackAlias.process(src, filename);
        }
        return src;
    }
};