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

const isDev = process.env.NODE_ENV === 'development';
const devMode = process.env.NODE_ENV !== 'production';

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const optimization = () => {
    const config = {
        splitChunks: { chunks: 'all' },
        minimize: true,
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
if (!devMode) {
    // enable in production only
    plugins.push(new MiniCssExtractPlugin());
}
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
        hot: isDev,
    },
    optimization: optimization(),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.jsx'],
        analytics: './analytics.ts',
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.png'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src'),
        },
    },

    plugins: [
        new VueLoaderPlugin(),
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
        // new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack Stas',
            template: './index.html',
            minify: {
                collapseWhitespace: isDev,
            },
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            // {
            //     test: /\.html$/i,
            //     loader: 'html-loader',
            // }, TODO: Error Разобраться почему вылетает  html-loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.less$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.css$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                ],
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
                    // 'style-loader',
                    // // Translates CSS into CommonJS
                    // 'css-loader',
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
