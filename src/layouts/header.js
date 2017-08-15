import React from 'react'
import Link from 'gatsby-link'
import { HeaderBackground, HeaderContainer, Menu, MenuItem, Title, Logo } from './../components/Header/styledHeader'

const ListLink = props => (
  <MenuItem>
    <Logo to={props.to}>
      {props.children}
    </Logo>
  </MenuItem>
)

const Header = () => (
  <HeaderBackground>
    <HeaderContainer>
      <Title>
        <Logo to="/">
        DM
        </Logo>
      </Title>
      <Menu>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Resume</ListLink>
        <ListLink to="/contact/">Skills</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </Menu>
    </HeaderContainer>
  </HeaderBackground>
)

export default Header