const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');


const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");


module.exports = {
  devServer : {
    port : 3000,
    contentBase : SRC_DIR,
    inline : true,
    historyApiFallback: true
  },
  entry: SRC_DIR + "/index.js",
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-2"]
        }
      }
    ]
  },
  plugins : [
    new CopyWebpackPlugin([
      {from : path.join(SRC_DIR, 'index.html')}
    ])

  ]
};