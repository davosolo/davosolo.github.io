import React from "react"
import Header from './../layouts/header'
import Container from './../layouts/aboutContainer'

const ContactPage = () =>
  <div>
    <Container title="I'd love to talk!">
      <p>Email me at the address below:<br/><br/>
        <a mailto="davidmzm@gmail.com">davidmzm@gmail.com</a>
      </p>
    </Container>
  </div>

  export default ContactPage