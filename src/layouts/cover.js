import React from 'react'
import Link from 'gatsby-link'
import { CoverBackground, CoverTitle, CoverSubtitle, CoverParagraph, ScrollPrompt } from './../components/styledCover'

const Cover = props => (
  <CoverBackground>
    <CoverSubtitle>{props.subtitle}</CoverSubtitle>
    <CoverTitle>{props.title}</CoverTitle>
    <CoverParagraph>{props.text}</CoverParagraph>
    <ScrollPrompt />
  </CoverBackground>
)

export default Cover