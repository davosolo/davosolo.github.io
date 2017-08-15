import React from 'react'
import Link from 'gatsby-link'
import { CoverBackground, CoverTitle, CoverSubtitle, CoverParagraph } from './../components/Cover/styledCover'

const Cover = () => (
  <CoverBackground>
    <CoverSubtitle>David Muñoz</CoverSubtitle>
    <CoverTitle>FRONT-END DEVELOPER</CoverTitle>
    <CoverParagraph>Hey! Come on in... Here you can take a glance of everything that has to do with me and my work so you can have a better idea of what I'm able to do. Or in other words: a showing off.</CoverParagraph>
  </CoverBackground>
)

export default Cover