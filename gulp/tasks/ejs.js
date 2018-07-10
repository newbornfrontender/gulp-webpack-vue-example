'use strict'

// =============================================================================
// ============================== EJS TASK CONFIG ==============================
// =============================================================================

// Import all plugins
// -----------------------------------------------------------------------------

import { task, src, dest } from 'gulp'

import WebpackStream from 'webpack-stream'
import Webpack from 'webpack'

// Import ejs webpack config
// -----------------------------------------------------------------------------

import { ejsConfig } from '../../webpack/configs/ejs/webpack.config.babel'

// Export ejs task config
// -----------------------------------------------------------------------------

export const ejsTask = function () {
  task('ejs', () => {
    return src(path.ejs.src.from)
      .pipe(WebpackStream({
        config: ejsConfig,
      }, Webpack))

      .pipe(dest(path.ejs.src.to))
  })
}
