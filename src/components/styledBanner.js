import React from 'react'
import styled from 'styled-components'
import image from './../themes/nyc.jpg'

const Banner = styled.header`
    /** Flexbox container */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /** Mobile first */
    padding-right: 0rem;
    height: 300px;
    width: 100%;

    /** Desktop */
    @media only screen and (min-width: 768px) {
        padding-right: 2rem;
    }

    text-align: center;
    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${props => image}) no-repeat;
    background-position: center;
    background-size: cover;
    /*background-attachment: fixed; */
    color: ${props => props.theme.light};
`
export default Banner