const path = require('path');
const MiniCss = require("mini-css-extract-plugin");


module.exports = {
    mode: 'development',
    devtool: 'source-map',
    watch: true,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [new MiniCss({
        filename: 'styles.css',
    })],
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }

            },
            {
                test: /\.css$/i,
                use: [MiniCss.loader, "css-loader"],
            }, {
                test: /\.(s*)css$/,
                use: [
                    MiniCss.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
        ],
    }

};