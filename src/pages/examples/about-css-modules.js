import React from "react"
import styled from "styled-components"
import Header from './../../layouts/header'
import Container from './../../layouts/aboutContainer'
import Link from 'gatsby-link'

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`

const Avatar = styled.img`
  flex: 0 0;
  width: 96px;
  height: 96px;
  margin: 0;
`

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

const Excerpt = styled.p`
  margin: 0;
`

const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} />
    <Description>
      <Username>
        {props.username}
      </Username>
      <Excerpt>
        {props.excerpt}
      </Excerpt>
    </Description>
  </UserWrapper>
)

const AboutCssModules = () => (
  <div>
    <Header />
    <Container title="About Styled Components">
      <p>Styled Components is cool</p>
      <User
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <img src="http://lorempixel.com/400/200/" />
      <br />
      <Link to="./counter">Counter</Link>
    </Container>
  </div>
)

export default AboutCssModules