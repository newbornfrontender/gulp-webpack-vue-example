'use strict'

// =============================================================================
// ============================ DEFAULT TASK CONFIG ============================
// =============================================================================

// Build type definition
// -----------------------------------------------------------------------------

import { argv } from 'yargs'

const env = argv.env || 'development'

// Import gulp commands
// -----------------------------------------------------------------------------

import { task, series, parallel } from 'gulp'

// Tasks configs for development / production build
// -----------------------------------------------------------------------------

const dev = function () {
  task('default', series(
    parallel(
      'ejs',
      'posthtml',
      'postcss'
    ), 'watch'
  ))
}

const prod = function () {
  task('default', series(
    parallel(
      'ejs',
      'posthtml',
      'postcss'
    )
  ))
}

// Build type definition and export default task config
// -----------------------------------------------------------------------------

export const defaultTask = (env === 'development') ? dev : prod
