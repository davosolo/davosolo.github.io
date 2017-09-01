import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import image from './../themes/coding.gif'
import scroll from './../themes/arrowDown.png'

const CoverBackground = styled.header`
    /** Flexbox container */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    /** Mobile first */
    padding-right: 0rem;
    height: 100vh;
    width: 100%;

    /** Desktop */
    @media only screen and (min-width: 768px) {
        padding-right: 2rem;
    }

    text-align: end;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)),url(${props => image}) no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    color: ${props => props.theme.light};
`

const CoverTitle = styled.h1`
    /** Mobile first */
    font-size: 3rem;
    max-width: 100%;
    padding-right: 1rem;
    
    /** Desktop */
    @media only screen and (min-width: 768px) {
        font-size: 5rem;
        max-width: 75%;
        padding-right: 2rem;
    }

    color: ${props => props.theme.secondary};
    font-family: 'Hammersmith One', sans-serif;
`

const CoverSubtitle = styled.h1`
    /** Mobile first */
    font-size: 2rem;
    padding-right: 1rem;
    
    /** Desktop */
    @media only screen and (min-width: 768px) {
        font-size: 3rem;
        padding-right: 2rem;
    }

    color: ${props => props.theme.light};
    font-family: ${props => props.theme.font};
`

const CoverParagraph = styled.p`
    /** Mobile first */
    font-size: 1.3rem;
    padding-right: 1rem;
    max-width: 90%;
    
    /** Desktop */
    @media only screen and (min-width: 768px) {
        font-size: 20px;
        max-width: 50%;
        padding-right: 2rem;
    }

    color: ${props => props.theme.middle};
    font-family: ${props => props.theme.font};
`

const ScrollPrompt = styled.div`
    display: block;
    overflow: hidden;
    width: 60px;
    height: 60px;
    border: 2px solid;
    border-radius: 50px;
    background: url(${props => scroll}) center no-repeat;
    margin: 50px auto 50px auto;
    box-shadow: ${props => props.theme.light} 5px 5px 0px 0px;
`

export { CoverBackground, CoverTitle, CoverSubtitle, CoverParagraph, ScrollPrompt }