var path = require('path');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src')
            }
        ]
    }
}
