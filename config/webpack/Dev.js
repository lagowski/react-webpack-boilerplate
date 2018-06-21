'use strict';

/**
 * Default dev server configuration.
 */
const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');

class WebpackDevConfig extends WebpackBaseConfig {

  constructor() {
    super();
    this.config = {
      devtool: 'source-map',
      entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://0.0.0.0:3000/',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './index.js'
      ],
      mode: 'development',
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.EnvironmentPlugin({
          NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
          DEBUG: true,
          REACT_APP_API_URL: 'http://localhost:5000',
        }),
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery"
        })
      ]
    };

    this.config.module.rules = this.config.module.rules.concat([
      {
        test: /^.((?!cssmodule).)*\.(sass|scss)$/,
        loaders: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          { loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }, {
        test: /^.((?!cssmodule).)*\.less$/,
        use: [
          {loader: "style-loader"},
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }, {
            loader: "less-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ])

    // console.log(this.config.module.rules);
  }
}

module.exports = WebpackDevConfig;
