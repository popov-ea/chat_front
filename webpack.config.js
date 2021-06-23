const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const jsLoaders = () => {
    const loaders = ["babel-loader"];

    if (isDev) {
        loaders.push("eslint-loader");
    }

    return loaders;
};

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        main: "./app.tsx"
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
        extensions: [".ts", ".tsx"]
    },
    devServer: {
        port: 4200
    },
    devtool: isDev ? "source-map" : undefined,
    module: {
        rules:  [
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