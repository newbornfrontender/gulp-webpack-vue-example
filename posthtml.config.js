'use strict'

// =============================================================================
// ============================== POSTHTML CONFIG ==============================
// =============================================================================

// Export the entire config via "posthtml-load-config"
// -----------------------------------------------------------------------------

module.exports = ({
  env, file, options
}) => ({

  // Parser config for files extensions
  // ---------------------------------------------------------------------------

  parser: (
    (file.extname === '.pug') ? 'posthtml-pug' :
    (file.extname === '.sml') ? 'posthtml-sugarml' :
    false
  ),

  // All PostHTML plugins
  // ---------------------------------------------------------------------------

  plugins: {

    // ???
    'posthtml-doctype': {
      doctype: 'HTML 5'
    },

    // ???
    'posthtml-include': {
      root: file.dirname
    },

    // ???
    'posthtml-bem': {
      elemPrefix: '__',
      modPrefix: '--',
      modDlmtr: '--'
    },

    // ???
    'posthtml-attrs-sorter': {
      order: [
        'class', 'id', 'name',
        'data-.+', 'ng-.+', 'src',
        'for', 'type', 'href',
        'values', 'title', 'alt',
        'role', 'aria-.+',
        '$unknown$'
      ]
    },

    // ???
    'posthtml-beautify': (env === 'production') ? false : {
      rules: {
        indent: 2
      }
    }

  }

})
