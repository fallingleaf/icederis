var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
    entry: [
        path.resolve(ROOT_PATH, 'client/index')
    ],
    output: {
        path: path.resolve(ROOT_PATH, 'static/build/'),
        publicPath: '/static/',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            { test: /\.jsx?$/, loaders: ['eslint'], include: path.resolve(ROOT_PATH, 'app') }
        ],
        loaders: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract(['css', 'sass'])},
            { test: /\.css$/, loaders: ["style", "css"]},
            { test: /\.(png|jpg|jpeg|gif|woff|woff2)$/, loader: 'url?limit=8192' }        ]
    },
    resolve: {
        root: [
            path.resolve(ROOT_PATH, 'client'),
            path.resolve(ROOT_PATH, 'static/scss'),
            path.resolve(ROOT_PATH, 'static/images')
        ],
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        'jquery': 'jQuery'
    },
    devServer: {
        contentBase: path.resolve(ROOT_PATH, 'static/js'),
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 3000,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('site.css', {
            allChunks: true
        })
    ]
};
