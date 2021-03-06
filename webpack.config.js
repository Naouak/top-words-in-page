const path = require('path');

const PATHS = {
    app: path.resolve(__dirname,'src'),
    build: __dirname
};

module.exports = {
    entry: {
        sidebar: path.join(PATHS.app, "sidebar.js")
    },

    output: {
        path: PATHS.build,
        filename: 'extension/[name]/[name].js'
    },

    resolve: {
        alias: {
            'vue': 'vue/dist/vue.min.js'
        }
    },

    devServer: {
        host: '127.0.0.1',
        port: 4040,
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loaders: ['style-loader','css-loader']
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }]
    }

};
