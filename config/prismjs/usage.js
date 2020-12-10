/* eslint-env node */

const cynuxsecurity = require('./cynuxsecurity-commands')
const Prism = require('prismjs')

Prism.languages.usage = {
  cynuxsecurity: {
    pattern: new RegExp(`cynuxsecurity (?:${cynuxsecurity.join('|')})`)
  },
  usage: {
    pattern: /(^|\n)\s*(usage|positional arguments|optional arguments)/
  }
}
