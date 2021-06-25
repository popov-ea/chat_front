/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        main: "./index.tsx"
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devServer: {
        port: 4200,
        proxy: {
            "/api": {
                target: "https://localhost:44382"
            }
        },
        writeToDisk: true,
        historyApiFallback: true
    },
    devtool: isDev ? "source-map" : undefined,
    module: {
        rules: [
            {
                test: /\.css/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(ts|tsx)/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    }
}