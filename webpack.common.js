const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './app/main.js',
  output: {
    filename: './dist/bundle.[chunkhash].js',
    path: __dirname + '/',
  },
  resolve: {
    modules: [
      "node_modules",
    ],
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: [
              "transform-class-properties",
              "transform-object-rest-spread",
              "syntax-dynamic-import"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      chunks: 'all',
      name: false,
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        main: {
          test: /[\\/]app[\\/]/,
          chunks: 'all',
        },
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: 'all',
        },
        utilityVendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    }
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path].br[query]',
      test: /\.(js)$/,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './template.html'
    }),
    new CleanWebpackPlugin(
      ['dist'],
      {
        beforeEmit: true
      }
    )
  ]
};
