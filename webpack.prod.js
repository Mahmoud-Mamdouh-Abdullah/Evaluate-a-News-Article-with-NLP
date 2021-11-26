const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MinifyCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssOptimizerPlugin = require('optimize-css-assets-webpack-plugin');
const WorkBox = require('workbox-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/client/index.js'),    
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [MinifyCssExtractPlugin.loader, "css-loader", "sass-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MinifyCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new WorkBox.GenerateSW()
    ],
    optimization: {
        minimizer: [new TerserPlugin(), new CssOptimizerPlugin()]
    }
}
