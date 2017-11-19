const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const app = new express();
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler));

app.listen(3000,function () {
    console.log('example app listening on prot 3000~!@@\n')
})