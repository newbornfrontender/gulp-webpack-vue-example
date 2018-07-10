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
  in: 'ejs',
  out: 'phtml'
}

// ???
// -----------------------------------------------------------------------------

export default new WebpackConfig().merge({
  output: {
    filename: `${page.first}.${ext.out}`
  },
  mode: 'development',
  watch: true,
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
