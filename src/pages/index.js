import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1 style = {{ color: 'yellow'}}>The Great Gatsby</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <img src="http://lorempixel.com/400/200/"/>
    <br/>
    <Link to="/page-2/">Go to page 2</Link>
    <br/>
    <Link to="/counter/">Counter</Link>
    <br/>
    <Link to="/about-css-modules/">Container</Link>
  </div>
)

export default IndexPage
