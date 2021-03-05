const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        analytics: './src/analytics.js',
    },
    plugins: [new BundleAnalyzerPlugin(), new HtmlWebpackPlugin()],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
};

// module.exports = {
//     entry: './src/index.ts',
//     plugins: [new BundleAnalyzerPlugin()],
//     module: {
//         rules: [
//             {
//                 test: /\.ts$/,
//                 use: 'ts-loader',
//                 include: [path.resolve(__dirname, 'src')],
//             },
//         ],
//     },
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'public'),
//     },
// };
