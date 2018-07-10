'use strict'

// ============================================================================
// ============================ GULP OPTION CONFIG ============================
// ============================================================================

// Build type definition
// ----------------------------------------------------------------------------

import { argv } from 'yargs'

const env = argv.env || 'development'

// Build type definition and read option key in file
// ----------------------------------------------------------------------------

function readOptions (filename) {
  let options

  try {
    options = require(filename)
  } catch(e) {
    console.error(`No config file found at: ${filename}`)

    options = {}
  }

  return options
}

// Export option key
// ----------------------------------------------------------------------------

export function getConfigOptions () {
  const options = readOptions(`./environments/${env}`)

  options.environment = env

  return options
}
