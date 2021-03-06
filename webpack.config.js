/*
 * Environment and Imports
*/
var env = process.env.NODE_ENV.trim();
var devMode = env != "production";

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

const here = p => path.join(__dirname, p);

/*
 * Entry
 */
const entry = {
    main: [here("./src/index.js")]
};

/*
 * Output
 */
const output = {
    path: here("./public/dist"),
    filename: "[name].bundle.js"
};

/*
 * Module
 */
const modules = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        },
        {
            test: /\.(sass|css|scss)$/,
            use: [
                'style-loader',
                'css-loader',
            ]
        },
    ]
};

console.log(modules.rules[1].use[0]);

/*
 * Plugins
 */
const plugins = [
    new MiniCssExtractPlugin({
        filename: devMode ? "[name].css" : "[name].[hash].css",
        chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    }),
    new HtmlWebpackPlugin({
        template: here("./public/index.html")
    }),
];

// Enabling HMR only if dev mode is enabled
if (devMode) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
}

/*
 * Optimization
 */
// const optimization = {
//     minimizer: [
//         new UglifyJsPlugin({
//             sourceMap: true,
//             parallel: 4,
//             cache: true,
//             extractComments: true,
//             uglifyOptions: {
//                 comments: /@preserve/i
//             }
//         })
//     ]
// };

/*
 * Exporting configuration
 */
var configObject = {
    mode: env,
    entry,
    devServer: {
        port: 3000,
        hot: true,
        proxy: {
            "/api": "http://localhost:5000"
        },
        historyApiFallback: true
    },
    // optimization,
    devtool: "inline-cheap-module-source-map",
    output,
    resolveLoader: {
        // Configure how Webpack finds `loader` modules.
        modules: [here("./node_modules")]
    },
    module: modules,
    plugins
};

module.exports = (env, argv) => {
    configObject.mode = argv.mode;
    return configObject
};
