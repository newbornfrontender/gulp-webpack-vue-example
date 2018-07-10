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

import HtmlWebpackPlugin from 'html-webpack-plugin'

// ???
// -----------------------------------------------------------------------------

import WebpackConfig from 'webpack-config'

// ???
// -----------------------------------------------------------------------------

const page = {
  first: 'index'
}

const ext = {
  in: 'ejs',
  out: 'phtml'
}

// ???
// -----------------------------------------------------------------------------

export const ejsConfig = new WebpackConfig().extend(
  `./webpack/configs/ejs/environments/webpack.${env}.config.js`
).merge({
  output: {
    filename: `${page.first}.${ext.out}`
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        exclude: /node_modules/,
        use: [
          'underscore-template-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./source/pages/${page.first}.${ext.in}`,
      filename: `${page.first}.${ext.out}`,
      title: 'Test',
      inject: false,
      hash: false
    })
  ]
})
