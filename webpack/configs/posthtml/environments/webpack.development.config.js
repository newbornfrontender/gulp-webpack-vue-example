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

const name = {
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
    filename: `${name.first}.js`
  },
  mode: 'development',
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      template: `./source/pages/${name.first}.${ext.in}`,
      filename: `${name.first}.${ext.out}`,
      inject: false,
      hash: false
    })
  ]
})
