const path = require("path");

module.exports = {
    devServer: {
        historyApiFallback: true
    },
    node: {
        fs: "empty"
    },
    entry: './src/index.js',
    output: {
        path: __dirname,
        publicPath: './public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ["@babel/plugin-proposal-class-properties"]
              }
            }
          }
        ]
    }
}