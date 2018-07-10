'use strict'

// ============================================================================
// =========================== POSTHTML TASK CONFIG ===========================
// ============================================================================

// Build type definition
// ----------------------------------------------------------------------------

import { argv } from 'yargs'

const env = argv.env || 'development'

// Import all plugins
// ----------------------------------------------------------------------------

import { task, src, dest } from 'gulp'

import GulpPlumber from 'gulp-plumber'
import WebpackStream from 'webpack-stream'
import Webpack from 'webpack'

// Import all configs
// ----------------------------------------------------------------------------

import { errorHandler } from '../errors/config'
import { posthtmlConfig } from '../../webpack/configs/posthtml/webpack.config.babel'

// Export posthtml task config
// ----------------------------------------------------------------------------

export const posthtmlTask = function () {
  task('posthtml', () => {
    return src(path.posthtml.src)
      .pipe(GulpPlumber({
        errorHandler
      }))

      .pipe(WebpackStream({
        config: posthtmlConfig,
      }, Webpack))

      .pipe(dest(
        (env === 'development') ? path.posthtml.dev : path.posthtml.prod
      ))
  })
}

// ============================================================================
// =================================== ???? ===================================
// ============================================================================

// ----------------------------------------------------------------------------

// import { getConfigOptions } from '../options/config'

// const option = getConfigOptions ()

// ----------------------------------------------------------------------------

// import Lazypipe from 'lazypipe'
// import GulpIf from 'gulp-if'
// import GulpRename from 'gulp-rename'

// ----------------------------------------------------------------------------

// const rename = Lazypipe ()
//   .pipe(function () {
//     return GulpIf(option.suffix, GulpRename({
//       suffix: '.min'
//     }))
//   })

// ----------------------------------------------------------------------------

// export const posthtmlTask = function () {
//   task('posthtml', () => {
//     return src(path.posthtml.src)

//       .pipe(GulpRename({
//         extname: '.html'
//       }))
//       .pipe(rename())

//       .pipe(dest(
//         (env === 'development') ? path.posthtml.dev : path.posthtml.prod
//       ))
//   })
// }
