'use strict'

// =============================================================================
// ============================= WATCH TASK CONFIG =============================
// =============================================================================

// Import gulp commands
// -----------------------------------------------------------------------------

import { task, watch, series } from 'gulp'

// Export watch task config
// -----------------------------------------------------------------------------

export const watchTask = function () {
  task('watch', function () {
    watch(
      path.ejs.src.from,
      series('ejs')
    ),

    watch(
      path.posthtml.src,
      series('posthtml')
    ),

    watch(
      path.postcss.src,
      series('postcss')
    )
  })
}
