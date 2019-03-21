/* eslint-disable no-undef */
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
      filename: "index.html"
    }),

    new GoogleFontsPlugin({
      fonts: [
        {family: "Source Sans Pro"},
        {family: "Roboto"},
      ]
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        }
      },

      {
        test: /\.(css|sass|scss)$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          "file-loader"
        ]
      },
    ]
  },

  performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000
    //   hints: false
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            unsafe: true,
            inline: true,
            passes: 2,
            keep_fargs: false,
          },
          output: {
            beautify: false,
          },
          mangle: true,
        },
      }),
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          "preset": "advanced",
          "safe": true,
          "map": {"inline": false}
        },
      }),
    ],

    mangleWasmImports: true
  },

  mode: "production",
  devtool: "none"
};
