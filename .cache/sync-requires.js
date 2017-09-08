// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---cache-dev-404-page-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/.cache/dev-404-page.js")),
  "page-component---src-pages-404-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/404.js")),
  "page-component---src-pages-about-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/about.js")),
  "page-component---src-pages-contact-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/contact.js")),
  "page-component---src-pages-index-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/index.js")),
  "page-component---src-pages-resume-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/resume.js")),
  "page-component---src-pages-skills-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/skills.js")),
  "page-component---src-pages-examples-about-css-modules-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/examples/about-css-modules.js")),
  "page-component---src-pages-examples-counter-js": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/pages/examples/counter.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/404.json"),
  "about.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/about.json"),
  "contact.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/contact.json"),
  "index.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/index.json"),
  "resume.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/resume.json"),
  "skills.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/skills.json"),
  "404-html.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/404-html.json"),
  "examples-about-css-modules.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/examples-about-css-modules.json"),
  "examples-counter.json": require("/Users/david/Sites/davosolo.github.io/.cache/json/examples-counter.json")
}

exports.layouts = {
  "index": preferDefault(require("/Users/david/Sites/davosolo.github.io/src/layouts/index"))
}