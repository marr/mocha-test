var path = require('path');
var ROOT_PATH = path.resolve(__dirname, '.');
var dirs = [ROOT_PATH + '/app', ROOT_PATH + '/test'];

module.exports = {
    entry: ['mocha!./test/main_spec.js'],
    output: {
        path: ROOT_PATH + '/build',
        filename: '[name].js'
    },
    module: {
        loaders: [{ test: /\.jsx?$/, loader: 'babel-loader', include: dirs }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    }

}
