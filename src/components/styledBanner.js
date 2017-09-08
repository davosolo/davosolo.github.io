import React from 'react'
import styled from 'styled-components'

const Banner = styled.header`
    /** Flexbox container */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    /** Mobile first */
    padding-right: 0rem;
    height: ${props => props.height};
    width: 100%;

    /** Desktop */
    @media only screen and (min-width: 768px) {
        padding-right: 2rem;
    }

    text-align: center;
    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${props => props.backgroundImage}), black no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: ${props => props.attachment};
    color: ${props => props.theme.light};
`
export default Banner