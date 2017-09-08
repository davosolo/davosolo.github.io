webpackJsonp([0x37beb808d31a9600,0x1ec536dc3c26d000,0xe3d6bfceba0f5000,0xe137632c09dc8800],{"./src/components/styledBanner.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}Object.defineProperty(n,"__esModule",{value:!0});var s=i(["\n    /** Flexbox container */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    /** Mobile first */\n    padding-right: 0rem;\n    height: 410px;\n    width: 100%;\n    margin-bottom: 3rem;\n\n    /** Desktop */\n    @media only screen and (min-width: 768px) {\n        padding-right: 2rem;\n    }\n\n    text-align: center;\n    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(",") no-repeat;\n    background-position: center;\n    background-size: cover;\n    background-attachment: fixed;\n    color: ",";\n"],["\n    /** Flexbox container */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    /** Mobile first */\n    padding-right: 0rem;\n    height: 410px;\n    width: 100%;\n    margin-bottom: 3rem;\n\n    /** Desktop */\n    @media only screen and (min-width: 768px) {\n        padding-right: 2rem;\n    }\n\n    text-align: center;\n    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(",") no-repeat;\n    background-position: center;\n    background-size: cover;\n    background-attachment: fixed;\n    color: ",";\n"]),d=t("./node_modules/react/react.js"),a=(o(d),t("./node_modules/styled-components/lib/index.js")),r=o(a),l=t("./src/themes/workers.jpeg"),u=o(l),c=r.default.header(s,function(e){return u.default},function(e){return e.theme.light});n.default=c,e.exports=n.default},"./src/components/styledCover.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.ScrollPrompt=n.CoverParagraph=n.CoverSubtitle=n.CoverTitle=n.CoverBackground=void 0;var s=i(["\n    /** Flexbox container */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-end;\n\n    /** Mobile first */\n    padding-right: 0rem;\n    height: 100vh;\n    width: 100%;\n\n    /** Desktop */\n    @media only screen and (min-width: 768px) {\n        padding-right: 2rem;\n    }\n\n    text-align: end;\n    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)),url(",") no-repeat;\n    background-position: center;\n    background-size: cover;\n    /* background-attachment: fixed; */\n    color: ",";\n"],["\n    /** Flexbox container */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-end;\n\n    /** Mobile first */\n    padding-right: 0rem;\n    height: 100vh;\n    width: 100%;\n\n    /** Desktop */\n    @media only screen and (min-width: 768px) {\n        padding-right: 2rem;\n    }\n\n    text-align: end;\n    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)),url(",") no-repeat;\n    background-position: center;\n    background-size: cover;\n    /* background-attachment: fixed; */\n    color: ",";\n"]),d=i(["\n    /** Mobile first */\n    font-size: 3rem;\n    max-width: 100%;\n    padding-right: 1rem;\n    \n    /** Desktop */\n    @media only screen and (min-width: 768px) {\n        font-size: 5rem;\n        max-width: 75%;\n        padding-right: 2rem;\n    }\n\n    color: ",";\n    font-family: 'Hammersmith One', sans-serif;\n"],["\n    /** Mobile first */\n    font-size: 3rem;\n    max-width: 100%;\n    padding-right: 1rem;\n    \n    /** Desktop */\n    @media only screen and (min-width: 768px) {\n        font-size: 5rem;\n        max-width: 75%;\n        padding-right: 2rem;\n    }\n\n    color: ",";\n    font-family: 'Hammersmith One', sans-serif;\n"]),a=i(["\n    /** Mobile first */\n    font-size: 2rem;\n    padding-right: 1rem;\n    \n    /** Desktop */\n    @media only screen and (min-width: 768px) {\n        font-size: 3rem;\n        padding-right: 2rem;\n    }\n\n    color: ",";\n    font-family: ",";\n"],["\n    /** Mobile first */\n    font-size: 2rem;\n    padding-right: 1rem;\n    \n    /** Desktop */\n    @media only screen and (min-width: 768px) {\n        font-size: 3rem;\n        padding-right: 2rem;\n    }\n\n    color: ",";\n    font-family: ",";\n"]),r=i(["\n    /** Mobile first */\n    font-size: 1.3rem;\n    padding-right: 1rem;\n    max-width: 90%;\n    \n    /** Desktop */\n    @media only screen and (min-width: 768px) {\n        font-size: 20px;\n        max-width: 50%;\n        padding-right: 2rem;\n    }\n\n    color: ",";\n    font-family: ",";\n"],["\n    /** Mobile first */\n    font-size: 1.3rem;\n    padding-right: 1rem;\n    max-width: 90%;\n    \n    /** Desktop */\n    @media only screen and (min-width: 768px) {\n        font-size: 20px;\n        max-width: 50%;\n        padding-right: 2rem;\n    }\n\n    color: ",";\n    font-family: ",";\n"]),l=i(["\n    display: block;\n    overflow: hidden;\n    width: 60px;\n    height: 60px;\n    border: 2px solid;\n    border-radius: 50px;\n    background: url(",") center no-repeat;\n    margin: 50px auto 50px auto;\n    box-shadow: "," 5px 5px 0px 0px;\n"],["\n    display: block;\n    overflow: hidden;\n    width: 60px;\n    height: 60px;\n    border: 2px solid;\n    border-radius: 50px;\n    background: url(",") center no-repeat;\n    margin: 50px auto 50px auto;\n    box-shadow: "," 5px 5px 0px 0px;\n"]),u=t("./node_modules/react/react.js"),c=(o(u),t("./node_modules/styled-components/lib/index.js")),b=o(c),m=t("./src/themes/coding.gif"),g=o(m),p=t("./src/themes/arrowDown.png"),f=o(p),h=b.default.header(s,function(e){return g.default},function(e){return e.theme.light}),v=b.default.h1(d,function(e){return e.theme.secondary}),x=b.default.h1(a,function(e){return e.theme.light},function(e){return e.theme.font}),j=b.default.p(r,function(e){return e.theme.middle},function(e){return e.theme.font}),_=b.default.div(l,function(e){return f.default},function(e){return e.theme.light});n.CoverBackground=h,n.CoverTitle=v,n.CoverSubtitle=x,n.CoverParagraph=j,n.ScrollPrompt=_},"./src/layouts/banner.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t("./node_modules/react/react.js"),s=o(i),d=t("./src/components/styledBanner.js"),a=o(d),r=t("./src/components/styledContainer.js"),l=function(e){return s.default.createElement(a.default,null,s.default.createElement(r.TitleRetro,null,e.title))};n.default=l,e.exports=n.default},"./src/layouts/cover.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t("./node_modules/react/react.js"),s=o(i),d=t("./node_modules/gatsby-link/index.js"),a=(o(d),t("./src/components/styledCover.js")),r=function(e){return s.default.createElement(a.CoverBackground,null,s.default.createElement(a.CoverSubtitle,null,e.subtitle),s.default.createElement(a.CoverTitle,null,e.title),s.default.createElement(a.CoverParagraph,null,e.text),s.default.createElement(a.ScrollPrompt,null))};n.default=r,e.exports=n.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/david/Sites/davosolo.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-env/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/about.js':function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t("./node_modules/react/react.js"),s=o(i),d=t("./src/layouts/header.js"),a=(o(d),t("./src/layouts/aboutContainer.js")),r=o(a),l=t("./src/components/styledContainer.js"),u=function(){return s.default.createElement(r.default,{title:"ABOUT ME",subtitle:"[~]$ whoami",name:"David Muñoz Marín",phone:"(+57) 311 394 1014",email:"davidmzm@gmail.com",location:"Medellín, Colombia",since:"March 25th, 1984"},s.default.createElement(l.Subtitle,null,"[~]$ whoami"),s.default.createElement("p",null,"I'm a B.S in Computer Science experienced in software development towards the front-end side, skilled in a wide variety of technologies. Throughout my career I've gained expertise in all aspects of the software development life cycle, in both: agile & waterfall methodologies."),s.default.createElement("br",null),s.default.createElement(l.Subtitle,null,"What I like"),s.default.createElement("p",null,"I enjoy creating stuff, specially if I can use the latest trends of this never ending changing world of software development. Even though I've worked before as a back-end developer, nowadays I'm more into coding the presentation layer of the web applications. Also, I've been playing with hybrid mobile applications frameworks like Ionic and Fuse lately and I find it fascinating. Now... Stepping aside from software, I like running, whatching movies & TV shows, videogames and of course, music. Photographer wannabe."))};n.default=u,e.exports=n.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/david/Sites/davosolo.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-env/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/contact.js':function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t("./node_modules/react/react.js"),s=o(i),d=t("./src/layouts/header.js"),a=(o(d),t("./src/layouts/aboutContainer.js")),r=o(a),l=function(){return s.default.createElement("div",null,s.default.createElement(r.default,{title:"I'd love to talk!"},s.default.createElement("p",null,"Email me at the address below:",s.default.createElement("br",null),s.default.createElement("br",null),s.default.createElement("a",{mailto:"davidmzm@gmail.com"},"davidmzm@gmail.com"))))};n.default=l,e.exports=n.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/david/Sites/davosolo.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-env/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js':function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t("./node_modules/react/react.js"),s=o(i),d=t("./src/layouts/cover.js"),a=o(d),r=t("./src/layouts/header.js"),l=o(r),u=t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/david/Sites/davosolo.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-env/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/about.js'),c=o(u),b=t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/david/Sites/davosolo.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-env/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/contact.js'),m=(o(b),t("./src/layouts/banner.js")),g=o(m),p=t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/david/Sites/davosolo.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-env/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/resume.js'),f=o(p),h=function(){return s.default.createElement("main",null,s.default.createElement(a.default,{title:"FRONT-END DEVELOPER",subtitle:"Muñoz, David",text:"Hey... Welcome! In here, you can take a glance of everything that has to do with me and my work so you can have a better idea of what I'm able to do. Or in other words: a showing off."}),s.default.createElement(l.default,null),s.default.createElement(c.default,null),s.default.createElement(g.default,{title:"Resume"}),s.default.createElement(f.default,null))};n.default=h,e.exports=n.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/david/Sites/davosolo.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-env/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/david/Sites/davosolo.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/resume.js':function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t("./node_modules/react/react.js"),s=o(i),d=t("./src/components/styledContainer.js"),a=function(){return s.default.createElement(d.StrongContainer,null,s.default.createElement(d.TextContainer,null,s.default.createElement("p",null,"You can download my resume ",s.default.createElement(d.StyledLink,{to:"/static/DavidMunoz_Resume.pdf"},"here"),".")))};n.default=a,e.exports=n.default},"./src/themes/arrowDown.png":function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAASCAYAAACnxdXaAAAAt0lEQVRIibXV2xHCIBBG4V87oAVboAV7shZrMSXYQlqwheODZCYXAruAZ4YHMpn94AkBAiLwAELaj14hzY+AFvDDr/cf4JDmkpwoYGbbSHgNLs1XSZO2RUkvSUF9hTQn7r5Py4meHOu5ce6GJEfrH0fBRXCPjoCrYA7tgU3gGdoCm8ES6oFdYA21wG7QgpbgWwtoRc/gXFXQg1pgE+hFS7AZbEFzsAtsRdewGwR0AVpfkbuOL5SpL1Px+TGJARuIAAAAAElFTkSuQmCC"},"./src/themes/coding.gif":function(e,n,t){e.exports=t.p+"static/coding.996ecc19.gif"},"./src/themes/workers.jpeg":function(e,n,t){e.exports=t.p+"static/workers.c7f8373f.jpeg"}});
//# sourceMappingURL=page-component---src-pages-index-js-4f7879dd64e0e6aa91fc.js.map