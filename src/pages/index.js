import React from 'react'
import Cover from './../layouts/cover'
import Header from './../layouts/header'
import Footer from './../layouts/footer'
import AboutPage from './about'
import Contact from './contact'
import Resume from './resume'
import Skills from './skills'

const IndexPage = () => (
  <main id="home">
    <Cover 
      title = "FRONT-END DEVELOPER" 
      subtitle = "Muñoz, David" 
      text = "Hey... Welcome! Here, you can take a glance of everything that has to do with me and my work so you can have a better idea of what I'm able to do. Or in other words: showing off."
    />
    <Header />
    <AboutPage />
    <Resume />
    <Skills />
    <Contact />
    <Footer />
  </main>
)

export default IndexPage
