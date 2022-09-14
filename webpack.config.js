const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Webpack Example App',
      header: 'Webpack Example Title',
      metaDesc: 'Webpack Example Description',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  mode : 'development',
  entry: './src/main.js',
  output: {
    clean : true,
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/assets/js'),
  },
};
