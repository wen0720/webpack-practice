const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'index.bundle.js'
        filename: '[name].bundle.js' // 當有多個 entry point 時，可以用 [name] 取代每個檔案的名稱
    },
    module: {
        rules: [
            {
                test: /\.txt$/,  // 什麼樣的檔案是想要轉換的
                // use: 'raw-loader' // 使用什麼 loader
                use: [
                    { loader: ['style-loader'](/loaders/style-loader) },
                    {
                      loader: ['css-loader'](/loaders/css-loader),
                      options: {
                        modules: true
                      }
                    },
                ]
            }            
        ]
    }
}



/***
 * webpack loader
 * loader 是一個轉換器，我們透過 module 將其引入。也可以用 import 的方式。
 * 在其他包版工具，loader 就像 task 一樣。他可以將 typescript 轉為 js，或是將 image 轉為 data url 等。
 * 甚至允許你從 js module 中，引入 css files
 * 
 * loader feature 
 * loader 可以用鏈式方式撰寫，每個 loader 使用 transformations 去處理 resource 。
 * 鏈式是反過來執行的，第一個 loader 將結果（resource with applied transformations），傳遞至下一個。
 * 最後 webpack 由最後一個 loader 回傳 js 返回至第一個。
 * 
 * loader 可以是同步或非同步的。
 * 
 * loader 在 node 中運行，可以在 node 中做任何事。
 * 
 * loader 可以傳入 options object 做為設定。
 * 
 * pligin 能給 loader 更多強大的功能。
 * 
 * normal module 也可以透過 package.json 的 loader field 輸出
 * 
 * loder 可以被任意的 file 觸發
 */


 /**
  * output
  * 控制如何將文件寫入硬碟，
  * 雖然可以有多個 entry point，但是 output 只能有一個。
  * 
  */