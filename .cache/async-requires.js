// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "page-component---src-pages-404-js": require("gatsby-module-loader?name=page-component---src-pages-404-js!/Users/david/Sites/davosolo.github.io/src/pages/404.js"),
  "page-component---src-pages-about-js": require("gatsby-module-loader?name=page-component---src-pages-about-js!/Users/david/Sites/davosolo.github.io/src/pages/about.js"),
  "page-component---src-pages-contact-js": require("gatsby-module-loader?name=page-component---src-pages-contact-js!/Users/david/Sites/davosolo.github.io/src/pages/contact.js"),
  "page-component---src-pages-index-js": require("gatsby-module-loader?name=page-component---src-pages-index-js!/Users/david/Sites/davosolo.github.io/src/pages/index.js"),
  "page-component---src-pages-resume-js": require("gatsby-module-loader?name=page-component---src-pages-resume-js!/Users/david/Sites/davosolo.github.io/src/pages/resume.js"),
  "page-component---src-pages-skills-js": require("gatsby-module-loader?name=page-component---src-pages-skills-js!/Users/david/Sites/davosolo.github.io/src/pages/skills.js"),
  "page-component---src-pages-examples-about-css-modules-js": require("gatsby-module-loader?name=page-component---src-pages-examples-about-css-modules-js!/Users/david/Sites/davosolo.github.io/src/pages/examples/about-css-modules.js"),
  "page-component---src-pages-examples-counter-js": require("gatsby-module-loader?name=page-component---src-pages-examples-counter-js!/Users/david/Sites/davosolo.github.io/src/pages/examples/counter.js")
}

exports.json = {
  "404.json": require("gatsby-module-loader?name=path---404!/Users/david/Sites/davosolo.github.io/.cache/json/404.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/Users/david/Sites/davosolo.github.io/.cache/json/about.json"),
  "contact.json": require("gatsby-module-loader?name=path---contact!/Users/david/Sites/davosolo.github.io/.cache/json/contact.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/david/Sites/davosolo.github.io/.cache/json/index.json"),
  "resume.json": require("gatsby-module-loader?name=path---resume!/Users/david/Sites/davosolo.github.io/.cache/json/resume.json"),
  "skills.json": require("gatsby-module-loader?name=path---skills!/Users/david/Sites/davosolo.github.io/.cache/json/skills.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/david/Sites/davosolo.github.io/.cache/json/404-html.json"),
  "examples-about-css-modules.json": require("gatsby-module-loader?name=path---examples-about-css-modules!/Users/david/Sites/davosolo.github.io/.cache/json/examples-about-css-modules.json"),
  "examples-counter.json": require("gatsby-module-loader?name=path---examples-counter!/Users/david/Sites/davosolo.github.io/.cache/json/examples-counter.json")
}

exports.layouts = {
  "index": require("gatsby-module-loader?name=layout-component---index!/Users/david/Sites/davosolo.github.io/src/layouts/index")
}