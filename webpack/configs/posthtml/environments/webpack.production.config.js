'use strict'

// =============================================================================
// ==================================== ??? ====================================
// =============================================================================

// ???
// -----------------------------------------------------------------------------

import WebpackConfig from 'webpack-config'
import HtmlWebpackPlugin from 'html-webpack-plugin'

// ???
// -----------------------------------------------------------------------------

const page = {
  first: 'index'
}

const ext = {
  in: 'phtml',
  out: 'html'
}

// ???
// -----------------------------------------------------------------------------

export default new WebpackConfig().merge({
  output: {
    filename: `${page.first}.${ext.out}`
  },
  mode: 'production',
  watch: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: `./source/pages/${page.first}.${ext.in}`,
      filename: `${page.first}.${ext.out}`,
      inject: false,
      hash: true
    })
  ]
})
