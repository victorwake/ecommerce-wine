const path = require('path');
const nodeExternals = require('webpack-node-externals')

module.exports = {
    mode: 'development',

    target: 'node',

    entry: {
        app: path.resolve(__dirname, './', 'index.js'),
    }, // Archivo de entrada de tu aplicación

    output: {
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida
        filename: 'bundle.js', // Nombre del archivo de salida
    },

    externals: [nodeExternals()],

    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ],
    }
};


