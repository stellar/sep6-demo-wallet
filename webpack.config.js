const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.js",
    wallet: "./src/wallet.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src")
    }
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpeg|ttf)$/,
        use: [{ loader: "file-loader" }]
      },
      {
        test: /\.(svg)$/,
        use: [{ loader: "svg-url-loader" }]
      }
    ]
  }
};
