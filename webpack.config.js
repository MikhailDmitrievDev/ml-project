const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
}

module.exports = {
    mode: 'development',
    entry: PATHS.src + '/index.js',
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: PATHS.dist 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.src + '/pug/pages/index.pug'
        }),
        new CleanWebpackPlugin(),
        
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        ]
    }

}