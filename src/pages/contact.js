import React from "react"
import Header from './../layouts/header'
import Title from './../components/Container/styledTitle'
import Container from './../components/Container/styledContainer'

const Contact = () =>
  <div>
    <Header/>
    <Container>
      <Title>I'd love to talk! Email me at the address below</Title>
      <p>
        <a mailto="davidmzm@gmail.com">davidmzm@gmail.com</a>
      </p>
    </Container>
  </div>

  export default Contact