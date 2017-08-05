// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---cache-dev-404-page-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/.cache/dev-404-page.js")),
  "page-component---src-pages-404-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/404.js")),
  "page-component---src-pages-about-css-modules-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/about-css-modules.js")),
  "page-component---src-pages-counter-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/counter.js")),
  "page-component---src-pages-index-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/index.js")),
  "page-component---src-pages-page-2-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/page-2.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/404.json"),
  "about-css-modules.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/about-css-modules.json"),
  "counter.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/counter.json"),
  "index.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/index.json"),
  "page-2.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/page-2.json"),
  "404-html.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/404-html.json")
}

exports.layouts = {
  "index": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/layouts/index"))
}