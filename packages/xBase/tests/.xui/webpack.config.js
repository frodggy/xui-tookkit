const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = path.resolve(__dirname, './output/dist');

module.exports = {
    entry: './.xui/output/build/index.js',
    output: {
        filename: 'app.js',
        path: buildPath
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './.xui/index.html',
            // Inject the js bundle at the end of the body of the given template
            inject: 'body',
        })
    ]
};
