'use strict'

// ============================================================================
// ============================= MAIN CONFIG FILE =============================
// ============================================================================

// Import tasks config
// ----------------------------------------------------------------------------

import { tasks } from './gulp/config'

// Paths for all tasks
// ----------------------------------------------------------------------------

global.path = {
  ejs: {
    src: {
      from: './source/pages/*.ejs',
      to: './source/pages/'
    }
  },

  posthtml: {
    src: './source/pages/*.{phtml,posthtml}',
    dev: './development/',
    prod: './production/'
  },

  postcss: {
    src: './source/styles/index.js', // './source/styles/*.{pcss,postcss}'
    dev: './development/styles/',
    prod: './production/styles/'
  },

  bundle: {
    src: './source/scripts/*.js',
    dev: './development/bundles/',
    prod: './production/bundles/'
  }
}

// Calling all tasks
// ----------------------------------------------------------------------------

tasks.forEach(function (tasksCall) {
  tasksCall ()
})
