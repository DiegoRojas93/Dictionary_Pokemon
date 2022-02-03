const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      TerserPlugin = require('terser-webpack-plugin'),
      CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
      Dotenv = require('dotenv-webpack'),
      { CleanWebpackPlugin } = require('clean-webpack-plugin'),
      svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]'
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@styles': path.resolve(__dirname, 'src/css'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' }
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              generator: ( content ) => svgToMiniDataURI(content.toString())
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        // use: {
        //   loader: 'url-loader',
        //   options: {
        //     limit: 1000,
        //     mineType: 'application/font-ttf',
        //     name: "[name].[contenthash].[ext]",
        //     outputPath: "./assets/fonts/",
        //     publicPath: "../assets/fonts/",
        //     esModule: false
        //   }
        // }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash].css'
    }),
    new Dotenv(),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ]
  }
}