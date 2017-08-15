import React from 'react'
import styled from 'styled-components'
import image from './../../themes/CV.jpg'

const Container = styled.div`
    margin: 1rem auto;
    padding: 0px 1.0875rem 1.45rem 0;
    background: linear-gradient(rgba(250,250,250,0.5), rgba(250,250,250,0.5)),url(${props => image}) no-repeat;
    background-position: center;
    background-size: cover;
    height: 400px;
`

export default Container