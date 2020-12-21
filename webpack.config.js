const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  src: path.join(__dirname, "./src"),
  dist: path.join(__dirname, "./dist"),
  assets: "assets/"
}

const config = {
  mode: 'development',
  // entry: './src/index.js',
  entry: {
    app: PATHS.src
  },
  output: {
    // path: path.resolve(__dirname, 'dist'),
    path: PATHS.dist,
    filename: `${PATHS.assets}js/[name].js`,
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  externals: {
    path: PATHS,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              // outputPath: PATHS.dist,
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ]
      },
      // {
      //   test: /\.html$/i,
      //   loader: 'html-loader',
      // },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.html`,
      filename: "./index.html"
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `${PATHS.src}/static/`, to: `${PATHS.dist}/static` },
      ]
    }),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};

module.exports = config;