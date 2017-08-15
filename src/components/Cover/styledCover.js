import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import image from './../../themes/coding.gif'
import Llamas from './../../themes/llamas'
import { injectGlobal } from 'styled-components';

const CoverBackground = styled.header`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)),url(${props => image}) no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    color: ${props => props.theme.light};
`

const CoverSubtitle = styled.h1`
    color: ${props => props.theme.light};
    font-family: ${props => props.theme.font};
    font-size: 50px;
    padding-right: 1em;
`

const CoverTitle = styled.h1`
    color: ${props => props.theme.secondary};
    font-size: 80px;
    max-width: 500px;
`

const CoverParagraph = styled.p`
    color: ${props => props.theme.middle};
    font-family: ${props => props.theme.font};
    text-align: right;
    font-size: 20px;
    max-width: 600px;
    padding-right: 2.5em;


`

export { CoverBackground, CoverTitle, CoverSubtitle, CoverParagraph }