const fs = require('fs')

const writeXML = (string) => {
  fs.writeFileSync('sitemap.xml', string)
}

module.exports = writeXML