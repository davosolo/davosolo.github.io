import React from "react"
import Container from './../layouts/container'
import BannerLayout from './../layouts/banner'
import { StrongContainer, TextContainer, StyledLink, LinkedinIcon, GithubIcon, EmailIcon, IconsContainer } from './../components/styledContainer'

const ContactPage = () =>
  <BannerLayout 
  title = "CONTACT" 
  backgroundImage = { null }
  attachment = "scroll"
  height = "410px"
  >
  <StrongContainer>
      <IconsContainer>
        <StyledLink alt="E-mail" href="mailto:davidmzm@gmail.com">
          <EmailIcon />
        </StyledLink>
        <StyledLink alt="LinkedIn" target="_blank" href="https://www.linkedin.com/in/david-mu%C3%B1oz-mar%C3%ADn-8785815/">
          <LinkedinIcon />
        </StyledLink>
        <StyledLink alt="GitHub" target="_blank" href="https://github.com/davosolo">
          <GithubIcon />
        </StyledLink>
      </IconsContainer>
  </StrongContainer>
  </BannerLayout>

  export default ContactPage