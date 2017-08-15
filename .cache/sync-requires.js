// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---cache-dev-404-page-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/.cache/dev-404-page.js")),
  "page-component---src-pages-404-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/404.js")),
  "page-component---src-pages-about-css-modules-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/about-css-modules.js")),
  "page-component---src-pages-about-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/about.js")),
  "page-component---src-pages-contact-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/contact.js")),
  "page-component---src-pages-counter-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/counter.js")),
  "page-component---src-pages-index-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/index.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/404.json"),
  "about-css-modules.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/about-css-modules.json"),
  "about.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/about.json"),
  "contact.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/contact.json"),
  "counter.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/counter.json"),
  "index.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/index.json"),
  "404-html.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/404-html.json")
}

exports.layouts = {
  "index": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/layouts/index"))
}