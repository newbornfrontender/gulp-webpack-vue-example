'use strict'

// =============================================================================
// ============================ POSTCSS TASK CONFIG ============================
// =============================================================================

// Build type definition
// -----------------------------------------------------------------------------

import { argv } from 'yargs'

const env = argv.env || 'development'

// Import all plugins
// -----------------------------------------------------------------------------

import { task, src, dest } from 'gulp'

import GulpPlumber from 'gulp-plumber'
import WebpackStream from 'webpack-stream'
import Webpack from 'webpack'

// Import all configs
// -----------------------------------------------------------------------------

import { errorHandler } from '../errors/config'
import { postcssConfig } from '../../webpack/configs/postcss/webpack.config.babel'

// Export postcss task config
// -----------------------------------------------------------------------------

export const postcssTask = function () {
  task('postcss', () => {
    return src(path.postcss.src)
      .pipe(GulpPlumber({
        errorHandler
      }))

      .pipe(WebpackStream({
        config: postcssConfig,
      }, Webpack))

      .pipe(dest(
        (env === 'development') ? path.postcss.dev : path.postcss.prod
      ))
  })
}
