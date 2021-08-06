const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { cacheLoader, cssProcessing } = require('./utils');

module.exports = {
    entry: {
        app: './src/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, '../src'),
        globalObject: 'self',
        filename: 'assets/js/[name].js',
        chunkFilename: 'assets/js/[name].js',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendors',
                    enforce: true
                },
            }
        }
    },
    stats: {
        children: false
    },
    resolve: {
        alias: {
            Assets: path.resolve(__dirname, '../src/assets'),
            API: path.resolve(__dirname, '../src/api'),
            Redux: path.resolve(__dirname, '../src/redux/'),
            Styles: path.resolve(__dirname, '../src/assets/styles'),
        },
        extensions: ['.wasm', '.mjs', '.jsx', '.js', '.json', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                exclude: /node_modules/,
                use: [
                    { ...cacheLoader() },
                    {
                        loader: 'babel-loader',
                    }
                ],
            },
            cssProcessing({ withModules: false }),
            cssProcessing({ withModules: true }),
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/img'
                        }
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'assets/fonts'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // filename: 'assets/css/[name].css',
            // chunkFilename: 'assets/css/[name].css',
            filename: '[name].css',
            chunkFilename: '[name].css',
        }),
    ],
    target: 'web',
}
