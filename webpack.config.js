const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require('webpack');
const paths = require('./paths');

const isDev = process.env.NODE_ENV === 'development';
const isDevelopment = process.env.NODE_ENV !== 'production';

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const optimization = () => {
    const config = {
        splitChunks: { chunks: 'all' },
        minimize: true,
        runtimeChunk: 'single',
    };
    if (!isDev) {
        config.minimizer = [
            new TerserPlugin(
                {
                    test: /\.js(\?.*)?$/i,
                },
                new CssMinimizerPlugin(),
            ),
        ];
    }
    return config;
};

const plugins = [];
if (!isDevelopment) {
    // enable in production only
    plugins.push(new MiniCssExtractPlugin());
}
module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: {
        main: ['@babel/polyfill', './index.jsx'],
        analytics: './analytics.ts',
        anugular: ['./angular.ts'],
        polyfills: ['./angular-polyfills.ts'],
    },
    context: path.resolve(__dirname, 'src'),
    target: 'web',
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
        ignored: /node_modules/,
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 9000,
        after() {},
        hot: isDev,
    },
    optimization: optimization(),

    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', 'ts', 'tsx', '.png'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src'),
        },
    },

    plugins: [
        new VueLoaderPlugin(),
        new LiveReloadPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/favicon.ico'),
                to: path.resolve(__dirname, 'dist'),
            },
        ]),
        new MiniCssExtractPlugin({
            filename: filename('css'),
        }),
        new ESLintPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.join(__dirname, './src'),
        ),
        // new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            template: './index.ejs',
            title: 'Webpack Stas',
            course: 'Webpack course with',
            minify: {
                collapseWhitespace: isDev,
            },
        }),
        new CleanWebpackPlugin(),
        isDevelopment && new webpack.HotModuleReplacementPlugin(),
        isDevelopment && new ReactRefreshWebpackPlugin(),
    ],
    module: {
        rules: [
            // {
            //     test: /\.html$/i,
            //     loader: 'html-loader',
            // },
            // TODO: Error Разобраться почему вылетает  html-loader
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            plugins: [
                                isDevelopment &&
                                    require.resolve('react-refresh/babel'),
                            ].filter(Boolean),
                        },
                    },
                ],
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: [
                    {
                        loader: require.resolve('ts-loader'),
                        options: {
                            plugins: [
                                isDevelopment &&
                                    require.resolve('react-refresh/babel'),
                            ].filter(Boolean),
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: ['babel-loader'],
            },
            {
                test: /\.(ts)$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: 'ts-loader',
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: 'vue-loader',
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: [
                    isDevelopment
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: [
                    isDevelopment
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    isDevelopment
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                ],
            },

            {
                test: /\.(ttf|woff|woff2|eot)$/,
                include: [path.resolve(__dirname, 'src')],
                use: ['file-loader'],
            },
            {
                test: /\.(xml)$/,
                include: [path.resolve(__dirname, 'src')],
                use: ['xml-loader'],
            },
            {
                test: /\.(csv)$/,
                include: [path.resolve(__dirname, 'src')],
                use: ['csv-loader'],
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                include: [path.resolve(__dirname, 'src')],
                use: ['file-loader'],
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
