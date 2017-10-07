import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import hamburger from './../themes/noun_hamburger.svg'

const HeaderContainer = styled.nav`
    /** Flexbox container */
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    /** Mobile first */
    width: 100%;
    height: 3rem;
    padding: 0.30rem 0.5rem;
    top: 0px;
    
    /** Desktop */
    @media only screen and (min-width: 768px) {
        width: 100%;
        padding: 0.40rem 1.0875rem;
        top: 0px;
    }

    border-bottom: 1px dotted ${props => props.theme.dark};
    background: ${props => props.theme.light};
    opacity: 0.5;
    position: sticky;
`

const Menu = styled.ul`
    list-style: none;
    margin-top: 0.5rem;
`

const MenuItem = styled.li`
    display: inline-block;
    margin-right: 0.5rem;
    font-family: ${props => props.theme.font};
    
    @media only screen and (min-width: 768px) {
        margin-right: 1rem;
        font-size: 1.2rem;
    }
`

const Title = styled.h1`
    margin: 0;
    display: inline;
    font-family: ${props => props.theme.font};
    letter-spacing: -4px;
`

const Logo = styled.a`
    color: ${props => props.theme.dark};
    font-family: ${props => props.theme.font};
    text-decoration: none;
`

const StyledHeaderLink = styled.a`
    color: ${props => props.theme.dark};
    display: inline-block;
    margin-right: 0.5rem;
    font-family: ${props => props.theme.font};
    text-decoration: none;

    @media only screen and (min-width: 768px) {
        margin-right: 1rem;
        font-size: 1.2rem;
    }
`

const Burger = styled.img`
    display: flex;
    src: url(${props => hamburger});
    width: 16px;
    height: 16px:
`

export { HeaderContainer, Menu, MenuItem, Title, Logo, Burger, StyledHeaderLink }