/**
 * Modules
 */

const fs = require('fs')

/**
 * Expose
 */

module.exports = sonit

/**
 * sonit
 */

function sonit (file, json) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(file, JSON.stringify(json, null, 2), function (err) {
      if (err) return reject(err)
      resolve()
    })
  })
}
