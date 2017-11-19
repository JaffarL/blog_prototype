const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
    entry: {
        app:['./src/index.js',hotMiddlewareScript],
        jquery:'./lib/jquery/jquery-3.2.1.min.js',
        bootstrap:'./lib/bootstrap-3.3.7-dist/js/bootstrap.js',
        bootstrap_css:"./lib/bootstrap-3.3.7-dist/css/bootstrap.css"
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase:'./dist',
        hot:true
    },
    module: {
        loaders: [
            { test: /\.js|jsx$/, loaders: ['babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-3']},
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new webpack.optimize.OccurrenceOrderPlugin(),
        //    new webpack.NoErrorPlugin(),
        new HtmlWebpackPlugin({
            template:'template/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "windows.jQuery":"jquery"
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

};