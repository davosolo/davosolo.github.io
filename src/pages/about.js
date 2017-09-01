import React from "react"
import Header from './../layouts/header'
import ContainerLayout from './../layouts/aboutContainer'
import { Title, Subtitle, Container, PersonalData, AboutContainer, ProfilePicture } from './../components/styledContainer'

const AboutPage = () => (
    <ContainerLayout title="ABOUT ME" subtitle="[~]$ whoami" name="David Muñoz Marín" phone="(+57) 311 394 1014" email="davidmzm@gmail.com" location="Medellín, Colombia" since="March 25th, 1984">
      <Subtitle>
        [~]$ whoami
      </Subtitle>
      <p>I'm a B.S in Computer Science experienced in software development towards the front-end side, skilled in a wide variety of technologies. Throughout my career I've gained expertise in all aspects of the software development life cycle, in both: agile & waterfall methodologies.</p>
      <br/>
      <Subtitle>
        What I like
      </Subtitle>
      <p>I enjoy creating stuff, specially if I can use the latest trends of this never ending changing world of software development. Even though I've worked before as a back-end developer, nowadays I'm more into coding the presentation layer of the web applications. Also, I've been playing with hybrid mobile applications frameworks like Ionic and Fuse lately and I find it fascinating.
        Now... Stepping aside from software, I like running, whatching movies & TV shows, videogames and of course, music. Photographer wannabe.
      </p>
    </ContainerLayout>
)

export default AboutPage