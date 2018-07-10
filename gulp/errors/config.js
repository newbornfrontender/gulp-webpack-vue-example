'use strict'

// =============================================================================
// ============================= GULP ERROR CONFIG =============================
// =============================================================================

// Build type definition
// -----------------------------------------------------------------------------

import { argv } from 'yargs'

const env = argv.env || 'development'

// Import plugin
// -----------------------------------------------------------------------------

import NodeNotifier from 'node-notifier'

// Export error config
// -----------------------------------------------------------------------------

export function errorHandler (error) {
  NodeNotifier.notify({
    title: 'Gulp error',
    message: error.message
  })

  console.error(error.message)

  this.emit('end')
}
