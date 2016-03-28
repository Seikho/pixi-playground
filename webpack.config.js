module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        filename: 'index.js',
        path: './front/scripts'
    },
    node: {
        fs: 'empty'
    }
}