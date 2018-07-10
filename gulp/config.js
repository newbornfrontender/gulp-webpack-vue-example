'use strict'

// ============================================================================
// =============================== TASKS CONFIG ===============================
// ============================================================================

// Build type definition
// ----------------------------------------------------------------------------

import { argv } from 'yargs'

const env = argv.env || 'development'

// Import all tasks
// ----------------------------------------------------------------------------

import { ejsTask } from './tasks/ejs'
import { posthtmlTask } from './tasks/posthtml'
import { postcssTask } from './tasks/postcss'
import { watchTask } from './tasks/watch'
import { defaultTask } from './tasks/default'

// Tasks configs for development / production build
// ----------------------------------------------------------------------------

const dev = [
  ejsTask,
  posthtmlTask,
  postcssTask,
  watchTask,
  defaultTask
]

const prod = [
  ejsTask,
  posthtmlTask,
  postcssTask,
  defaultTask
]

// Build type definition and export tasks config
// ----------------------------------------------------------------------------

export const tasks = (env === 'development') ? dev : prod
