import React from 'react'
import Link from 'gatsby-link'
import { HeaderContainer, Menu, MenuItem, Title, Logo, Burger } from './../components/styledHeader'

const ListLink = props => (
  <MenuItem>
    <Logo to={props.to}>
      {props.children}
    </Logo>
  </MenuItem>
)

const Header = () => (
  <HeaderContainer>
    <Title>
      <Logo to="/">
        MD
      </Logo>
    </Title>
    <Menu>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Resume</ListLink>
      <ListLink to="/contact/">Skills</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </Menu>
  </HeaderContainer>
)

export default Header