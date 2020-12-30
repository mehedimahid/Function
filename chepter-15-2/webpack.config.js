const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
require('babel-register')

module.exports = {
    entry:['@babel/polyfill', './src/app.js'],
    output:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:['babel-loader']
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open : true,
        contentBase: './dist'
    }
}