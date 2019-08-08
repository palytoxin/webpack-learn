const path = require('path');
module.exports = {
  mode: 'production',
  devtool: 'eval-source-map',
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
        ]
      }
    ]
  }
}

