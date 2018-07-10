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

// ???
// -----------------------------------------------------------------------------

export const posthtmlConfig = new WebpackConfig().extend(
  `./webpack/configs/posthtml/environments/webpack.${env}.config.js`
).merge({
  module: {
    rules: [
      {
        test: /\.(html|(p|post)html|pug|sml)$/,
        exclude: /node_modules/,
        use: [
          'html-loader',
          'posthtml-loader'
        ]
      }
    ]
  }
})
