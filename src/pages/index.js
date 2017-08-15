import React from 'react'
import Link from 'gatsby-link'
import Cover from './../layouts/cover'
import Header from './../layouts/header'
import Title from './../components/Container/styledTitle'
import Container from './../components/Container/styledContainer'
import AboutPage from './about'

const IndexPage = () =>
  <div>
    <Cover/>
    <Header/>
    <AboutPage/>
    <Container>
      <Title>The Great Gatsby</Title>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <img src="http://lorempixel.com/400/200/"/>

      <br/>
      <Link to="/counter/">Counter</Link>
      <br/>
      <Link to="/about-css-modules/">Container</Link>
      <br/>
      <Link to="/counter/">Counter</Link>
      <br/>
      <Link to="/about-css-modules/">Container</Link>
      <br/>
      <Link to="/counter/">Counter</Link>
      <br/>
      <Link to="/about-css-modules/">Container</Link>
    </Container>
  </div>


export default IndexPage
