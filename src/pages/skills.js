import React from "react"
import SkillsBannerImage from './../themes/Medellin.jpg'
import BannerLayout from './../layouts/banner'
import { CloudRow, CloudItem } from './../components/styledContainer'

const SkillsPage = () => (
  <BannerLayout 
    id = "skills"
    title = "SKILLS" 
    backgroundImage = {SkillsBannerImage}
    attachment = "scroll"
    height = "800px"
  >
  <CloudRow>
    <CloudItem style={{fontSize: "4rem"}}>HTML5</CloudItem>
    <CloudItem style={{fontSize: "1rem"}}>PostgreSQL</CloudItem>
    <CloudItem style={{fontSize: "2rem"}}>TypeScript</CloudItem>
  </CloudRow>
  <CloudRow>
    <CloudItem style={{fontSize: "3rem"}}>Gatsby</CloudItem>
    <CloudItem style={{fontSize: "2rem"}}>Ionic</CloudItem>
    <CloudItem style={{fontSize: "4rem"}}>JavaScript</CloudItem>
  </CloudRow>
  <CloudRow>
    <CloudItem style={{fontSize: "3rem"}}>SASS</CloudItem>
    <CloudItem style={{fontSize: "4rem"}}>jQuery</CloudItem>
    <CloudItem style={{fontSize: "4rem"}}>Git</CloudItem>
  </CloudRow>
  <CloudRow>
    <CloudItem style={{fontSize: "3rem"}}>StyledComponents</CloudItem>
    <CloudItem style={{fontSize: "4rem"}}>MySQL</CloudItem>
  </CloudRow>
  <CloudRow>
    <CloudItem style={{fontSize: "3rem"}}>Gulp</CloudItem>
    <CloudItem style={{fontSize: "1rem"}}>Firebase</CloudItem>
    <CloudItem style={{fontSize: "4rem"}}>CSS3</CloudItem>
    <CloudItem style={{fontSize: "1rem"}}>Fuse</CloudItem>
  </CloudRow>
  <CloudRow>
    <CloudItem style={{fontSize: "3rem"}}>React</CloudItem>
    <CloudItem style={{fontSize: "2rem"}}>Bootstrap</CloudItem>
    <CloudItem style={{fontSize: "4rem"}}>PHP</CloudItem>
  </CloudRow>
  <CloudRow>
    <CloudItem style={{fontSize: "2rem"}}>Angular2</CloudItem>
    <CloudItem style={{fontSize: "3rem"}}>RESTful WS</CloudItem>
    <CloudItem style={{fontSize: "1rem"}}>MongoDB</CloudItem>
  </CloudRow>
  </BannerLayout> 
)

export default SkillsPage