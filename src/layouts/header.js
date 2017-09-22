import React from 'react'
import Link from 'gatsby-link'
import { HeaderContainer, Menu, MenuItem, Title, Logo, Burger, StyledHeaderLink } from './../components/styledHeader'

const Header = () => (
  <HeaderContainer>
    <Title>
      <Logo href="#home">
        M,D
      </Logo>
    </Title>
    <Menu>
      <StyledHeaderLink href="#about">About</StyledHeaderLink>
      <StyledHeaderLink href="#resume">Resume</StyledHeaderLink>
      <StyledHeaderLink href="#skills">Skills</StyledHeaderLink>
      <StyledHeaderLink href="#contact">Contact</StyledHeaderLink>
    </Menu>
  </HeaderContainer>
)

export default Header