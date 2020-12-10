import path from 'path';
import autoprefixer from 'autoprefixer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins() { return [autoprefixer({ browsers: 'last 3 versions' })]; },
    sourceMap: true,
  }
};

const styles = {
  test: /\.(scss)$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: process.env.NODE_ENV === 'development',
      },
    },
    'css-loader?sourceMap',
    postcss,
    'sass-loader?sourceMap'
  ]
};

module.exports = {
  entry: './example/_src/js/index.js',
  output: {
    filename: 'example/build/app.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', {modules: false}]],
        }
      }]
    },
    styles],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "example/build"),
    compress: true,
    port: 9000,
    open: true,
  },
};
