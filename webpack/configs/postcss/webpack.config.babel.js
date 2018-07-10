'use strict'

// =============================================================================
// ==================================== ??? ====================================
// =============================================================================

// ???
// -----------------------------------------------------------------------------

import { argv } from 'yargs'

const env = argv.env || 'development'

// ???
// -----------------------------------------------------------------------------

import WebpackConfig from 'webpack-config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

// ???
// -----------------------------------------------------------------------------

const name = {
  first: 'main'
}

// ???
// -----------------------------------------------------------------------------

export const postcssConfig = new WebpackConfig().extend(
  `./webpack/configs/postcss/environments/webpack.${env}.config.js`
).merge({
  output: {
    filename: `${name.first}.js`
  },
  module: {
    rules: [
      {
        // test: /\.(css|(p|post)css|less|s?[a|c]ss|sss)$/,
        test: /\.(css|p(ost)?css|less|s?[a|c]ss|styl(us)?|sss)$/,
        exclude: /node_modules/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true // ?
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true // ?
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${name.first}.css`
    })
  ]
})
