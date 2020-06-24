const path = require("path");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require("webpack");
const project = require("./package.json");
const stripIndent = require("common-tags").stripIndent;

const userScriptBanner = stripIndent`
    // ==UserScript==
    // @name         DOers
    // @namespace    ${project.repository.url}
    // @version      ${project.version}
    // @description  ${project.description}
    // @author       ${project.author.name} (${project.author.email})
    // @match        https://www.dugout-online.com/*
    // ==/UserScript==`;

module.exports = {
    entry: "./src/index.ts",
    resolve: {
        extensions: [".ts"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "DOers.user.js"
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new webpack.BannerPlugin({
            banner: userScriptBanner,
            raw: true
        })
    ],
    module: {
        rules: [
            {
                "enforce": "pre",
                "test": /\.ts$/,
                "exclude": /node_modules/,
                "use": "eslint-loader"
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: "ts-loader"
            }
        ]
    }
};
