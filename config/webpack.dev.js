const path = require('path');
const merge = require('webpack-merge');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { eslintProcessing } = require('./utils');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../public'),
        // historyApiFallback: true,
        open: true,
        hot: true,
    },
    plugins: eslintProcessing(
        [
            new HtmlWebpackPlugin({
                title: 'Dev::App',
                filename: 'index.html',
                template: path.resolve(__dirname, './index.html'),
                minify: false,
                hash: false,
                chunks: ['app', 'vendors']
            }),
            new DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development'),
            }),
        ]
    )
});
