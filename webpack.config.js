var webpack = require('webpack');

config = {
    devtool: 'inline-source-map',

    entry: {
        main: [
            './src/App.js'
        ]
    },

    output: {
        path: 'build',
        publicPath: 'build',
        filename: 'app-bundle.js'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules[\/\\]/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader?minimize&localIdentName=[name]__[local]___[hash:base64:5]'
        }, {
            test: /\.(png|eot|woff2|ttf|svg|woff)$/,
            loader: 'url-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },

    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom',
            'deepAssign': 'deep-assign'
        }),
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    }
};

module.exports = config;
