import React from "react"
import Container from './../layouts/container'
import BannerLayout from './../layouts/banner'
import { StrongContainer, TextContainer, StyledLink } from './../components/styledContainer'

const ContactPage = () =>
  <BannerLayout 
  title = "CONTACT" 
  backgroundImage = { null }
  attachment = "scroll"
  height = "410px"
  >
  <StrongContainer>
      <TextContainer>
          <p style={{alignText: "center"}}>Talk to me here:&nbsp;
            <StyledLink href="mailto:davidmzm@gmail.com">davidmzm@gmail.com</StyledLink>
          </p>
      </TextContainer>
  </StrongContainer>
  </BannerLayout>

  export default ContactPage