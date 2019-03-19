const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',  // 透過 import 圖片進 entry point ，（為了將圖片複製到部署的資料夾，這邊目前沒設定壓縮
                        options: {
                            name: './images/[name].[ext]'
                        }
                    }                    
                ]
            },
            {
                test: /\.html$/,            
                use: [
                    // 'file-loader',
                    // 'extract-loader',
                    {
                        loader: 'html-loader',  // 這邊使用 html-loader 去處理.html檔的img路徑
                        options: {
                            attrs: ['img:src'],   // 可以設定 tag name : atrribute                                                      
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader/url',  // creates style nodes from JS strings (link style)
                        // loader: 'style-loader'   // creates style nodes from JS strings (inline style)
                    },                                        
                    {
                        loader: 'file-loader',
                        options: {
                            name: './css/[name].css'
                        }
                    },
                    // 'css-loader',  // translates CSS into CommonJS
                    'sass-loader'  // 將 sass 解譯成 css，預設使用 node-sass
                    // 順序是有關係的，越下面的越先開始執行
                ]
            }            
        ]
    },
    optimization: {
        minimizer: [
            // new UglifyJsPlugin()
        ]
    },
    plugins: [
        new cleanWebpackPlugin(),  // 清除掉 /dist 檔案的資料，在每次包版的時候
        new HtmlWebpackPlugin({
            title: '我的第一個用 webpack 包出來的 html',
            filename: 'index.html',  // 輸出後的路徑
            template: 'src/index.html'  // 被編譯的模板          
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
}