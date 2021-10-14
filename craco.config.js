module.exports = {
    webpack: {

        configure: {

            devtool: 'eval-source-map'

        }
    },
    devServer: {
        hot: true
    },
    target: 'web',
    mode: 'development',
}
