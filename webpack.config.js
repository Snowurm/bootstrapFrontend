const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",

    output: {
        filename: "[name].[contenthash].js",
        assetModuleFilename: "[path][name][ext][query]",
        path: path.resolve(__dirname, "./dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|sas)/i,
                use: [
                    {
                        loader: "style-loader", // inject CSS to page
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS modules
                    },
                    {
                        loader: "postcss-loader", // Run post css actions
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg|ico)/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
        }),
    ],
    optimization: {
        moduleIds: "deterministic",
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
