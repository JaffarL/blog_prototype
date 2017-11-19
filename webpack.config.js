const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
    entry: {
        app:['./src/index.js',hotMiddlewareScript]
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase:'./dist',
        hot:true
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/, loaders: ['babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-3']
            }
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
            jquery:"jquery",
            "windows.jQuery":"jquery"
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

};