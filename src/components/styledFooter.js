import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import hamburger from './../themes/noun_hamburger.svg'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${props => props.theme.light};
    background-color: black;
    padding: 10px 20px;
    font-family: ${props => props.theme.font};
`

export { FooterContainer }