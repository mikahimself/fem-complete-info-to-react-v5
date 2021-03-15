const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    context: __dirname,  // run from root directory
    entry: "./src/index.js",
    devtool: "cheap-source-map",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    // Lint automatically
    plugins: [new ESLintPlugin({
        extensions: ['js', 'jsx'],
        exclude: '/node_modules/',
    })],
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Transpile .js and jsx files into javascript
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'), // serve from public
        historyApiFallback: true, // redirect 404s to index.html
    }
}