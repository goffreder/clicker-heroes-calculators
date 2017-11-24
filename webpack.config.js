var webpack = require('webpack');
var version = require('./package.json').version;

config = {
    devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : null,

    entry: {
        main: [
            './src/App.js'
        ]
    },

    output: {
        path: 'build/',
        publicPath: 'build/',
        filename: 'app-bundle.js'
    },

    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules[\/\\]/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader?minimize&localIdentName=[name]__[local]___[hash:base64:5]'
        }, {
            test: /\.(png|eot|woff2|ttf|svg|woff)$/,
            loader: 'url-loader?limit=4096'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },

    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom',
            'deepAssign': 'deep-assign',
            'jQuery': 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'appData.version': JSON.stringify(version)
        }),
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    }
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
}

module.exports = config;
