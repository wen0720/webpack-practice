const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',    
    output: {
        path: path.resolve(__dirname, 'ex'),
        filename: 'index.bundle.js'
    }    
}