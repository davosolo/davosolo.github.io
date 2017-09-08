import React from "react"
import BannerLayout from './../layouts/banner'
import ResumeBannerImage from './../themes/workers.jpeg'
import { Title, Subtitle, Container, PersonalData, TextContainer, ProfilePicture, StrongContainer, StyledLink, StyledButton } from './../components/styledContainer'

const path = require('path');

const ResumePage = () => (
    <section>
    <BannerLayout 
    title = "RESUME" 
    backgroundImage = {ResumeBannerImage}
    attachment = "fixed"
    height = "310px"
  />
    <StrongContainer>
        <TextContainer>
            <p>Just hit the button below...</p>
            <br/>
            <br/>
            <br/>
            <StyledButton target="_blank" href={path.resolve(__PATH_PREFIX__ + 'static/DavidMunoz_Resume.pdf')}>Download</StyledButton>
        </TextContainer>
    </StrongContainer>
    </section>
)

export default ResumePage