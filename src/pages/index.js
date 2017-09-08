import React from 'react'
import Cover from './../layouts/cover'
import Header from './../layouts/header'
import AboutPage from './about'
import Contact from './contact'
import Resume from './resume'
import Skills from './skills'

const IndexPage = () => (
  <main>
    <Cover 
      title = "FRONT-END DEVELOPER" 
      subtitle = "Muñoz, David" 
      text = "Hey... Welcome! In here, you can take a glance of everything that has to do with me and my work so you can have a better idea of what I'm able to do. Or in other words: a showing off."
    />
    <Header />
    <AboutPage />
    <Resume />
    <Skills />
    <Contact />
  </main>
)

export default IndexPage
