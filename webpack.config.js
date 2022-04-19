const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  //development開發者模式 production線上模式
  mode: 'development',
  //進入點
  entry: './src/index.js',
  //輸出點
  output: {
    path: path.resolve(__dirname, 'dist'),
    //hash是為了避免cache等等的問題
    filename: 'main.[hash].bundle.js',
  },
  //開發時的hot reload
  devServer: {
    static: path.join(__dirname, 'dist'),
  },
  //規則
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          //可以使用根目錄的babel.config.json
          // options: {
          //   presets: ['@babel/preset-env'],
          // },
        },
      },
    ],
  },
  //debug好用的工具(不確定還可不可以用要查一下
  devtool: 'source-map',
  //讓webpack可以產出認識的檔案
  plugins: [
    //html以根目錄的template.html為基礎
    new HtmlWebpackPlugin({
      template: './template.html',
    }),
    //產出的css名字要改名叫什麼
    new MiniCssExtractPlugin({
      filename: 'main.[hash].css',
    }),
  ],
}
