'use strict'

// ???
// -----------------------------------------------------------------------------

import { argv } from 'yargs'

// ???
// -----------------------------------------------------------------------------

const env = argv.env || 'development'

// ???
// -----------------------------------------------------------------------------

function readKeys (filename) {
  let keys

  try {
    keys = require(filename)
  } catch(e) {
    console.error(`No config file found at: ${filename}`)

    keys = {}
  }

  return keys
}

// ???
// -----------------------------------------------------------------------------

export function getGulpConfigKeys () {
  const keys = readKeys(`./gulp-environments/${env}`)

  keys.environment = env

  return keys
}

export function getWebpackConfigKeys () {
  const keys = readKeys(`./webpack-environments/${env}`)

  keys.environment = env

  return keys
}
