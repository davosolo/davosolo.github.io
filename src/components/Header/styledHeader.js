import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const HeaderBackground = styled.div`
    background: transparent;
    margin-bottom: 0.45rem;
`

const HeaderContainer = styled.div`
    margin: 0 auto;
    padding: 0.40rem 1.0875rem;
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    border-bottom: 1px dotted ${props => props.theme.middle};
`

const Menu = styled.ul`
    list-style: none;
    float: right;
    margin-top: 6px;
`

const MenuItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
  font-family: ${props => props.theme.font};
  text-decoration: none;
`

const Title = styled.h1`
    margin: 0;
    display: inline;
    font-family: ${props => props.theme.font};
`

const Logo = styled(Link)`
    color: ${props => props.theme.middle};
    font-family: ${props => props.theme.font};
    text-decoration: none;
`

export { HeaderBackground, HeaderContainer, Menu, MenuItem, Title, Logo }