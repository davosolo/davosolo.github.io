import React from 'react'
import Link from 'gatsby-link'
import { StyledLink } from './../components/styledContainer' 
import { FooterContainer, Author } from './../components/styledFooter'

const Footer = () => (
  <FooterContainer>
    <div>
      Coded by <StyledLink alt="GitHub profile" target="_blank" href="https://github.com/davosolo">David Muñoz</StyledLink>
    </div>
    <div>
      About <StyledLink alt="This website source code" target="_blank" href="https://github.com/davosolo/davosolo.github.io">this</StyledLink> website
    </div>
  </FooterContainer>
)

export default Footer