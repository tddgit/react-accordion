// const NpmInstallPlugin = require('npm-install-webpack-plugin');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
        ignored: /node_modules/,
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        after() {},
    },
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analytics.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.png'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
        },
    },
    optimization: {
        splitChunks: { chunks: 'all' },
    },
    plugins: [
        // new NpmInstallPlugin(),
        new ESLintPlugin(),
        new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack Stas',
            template: './index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.(css|xcss)$/,
                use: ['style-loader', 'css-loader'],
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader'],
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.(xml)$/,
                use: ['xml-loader'],
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.(csv)$/,
                use: ['csv-loader'],
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use: ['file-loader'],
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'markdown-loader',
                        options: {
                            pedantic: true,
                        },
                    },
                ],
            },
        ],
    },
};
