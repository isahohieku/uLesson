const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const isDevelopment = process.env.NODE_ENV !== "production";

const port = process.env.PORT || 5000;

module.exports = {
    mode: isDevelopment ? "development" : "production",
    entry: "./src/index.tsx",
    devServer: {
        hot: true,
        port,
        historyApiFallback: true,
    },
    target: "web",
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public/index.html"),
        }),
        isDevelopment && new webpack.HotModuleReplacementPlugin(),
        isDevelopment && new ReactRefreshWebpackPlugin(),
    ],
    resolve: {
        modules: [
            __dirname,
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules'),
        ],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
        alias: {
            '@routes': path.resolve(__dirname, 'src', 'routes'),
            '@root': path.resolve(__dirname, 'src', 'root'),
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@styles': path.resolve(__dirname, 'src', 'styles'),
            '@services': path.resolve(__dirname, 'src', 'services'),
            '@context': path.resolve(__dirname, 'src', 'context'),
            '@hooks': path.resolve(__dirname, 'src', 'hooks'),
            '@hocs': path.resolve(__dirname, 'src', 'hocs'),
            '@pages': path.resolve(__dirname, 'src', 'pages'),
            '@utils': path.resolve(__dirname, 'src', 'utils'),
            '@helpers': path.resolve(__dirname, 'src', 'helpers'),
            '@types': path.resolve(__dirname, 'src', 'types'),
            '@assets': path.resolve(__dirname, 'src', 'assets'),
            '@assets/svg': path.resolve(__dirname, 'src', 'assets', 'svg'),
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$|tsx/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader"),
                options: {
                    plugins: [
                        isDevelopment && require.resolve("react-refresh/babel"),
                    ].filter(Boolean),
                },
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.png|jpg|gif|eot|woff|woff2|ttf$/,
                use: ["file-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            // { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ],
    },
};