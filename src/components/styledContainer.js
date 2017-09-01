import React from 'react'
import styled from 'styled-components'
import CV from './../themes/CV.jpg'

const Title = styled.h1`
    color: ${props => props.theme.dark};
    font-family: ${props => props.theme.font};
    font-size: 3rem;
    margin: 3rem auto 1rem auto;
    text-align: center;
    text-shadow: 5px 5px 0px ${props => props.theme.light};
`

const TitleElegant = styled.h1`
    color: ${props => props.theme.dark};
    font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
    font-size: 3rem;
    background-color: "#e7e5e4";
    margin: 3rem auto 1rem auto;
    text-align: center;
    letter-spacing: .3em;
    text-rendering: optimizeLegibility;
    text-shadow: 1px -1px 0 #767676, -1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777, -4px 8px 1px #7b7a7a, -5px 10px 1px #7f7d7d, -6px 12px 1px #828181, -7px 14px 1px #868585, -8px 16px 1px #8b8a89, -9px 18px 1px #8f8e8d, -10px 20px 1px #949392, -11px 22px 1px #999897, -12px 24px 1px #9e9c9c, -13px 26px 1px #a3a1a1, -14px 28px 1px #a8a6a6, -15px 30px 1px #adabab, -16px 32px 1px #b2b1b0, -17px 34px 1px #b7b6b5, -18px 36px 1px #bcbbba, -19px 38px 1px #c1bfbf, -20px 40px 1px #c6c4c4, -21px 42px 1px #cbc9c8, -22px 44px 1px #cfcdcd, -23px 46px 1px #d4d2d1, -24px 48px 1px #d8d6d5, -25px 50px 1px #dbdad9, -26px 52px 1px #dfdddc, -27px 54px 1px #e2e0df, -28px 56px 1px #e4e3e2;
`

const TitleDeep = styled.h1`
    color: ${props => props.theme.light};
    background-color: ${props => props.theme.light};
    letter-spacing: .1em;
    text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212, 0 22px 30px rgba(0, 0, 0, 0.9);
`

const TitleRetro = styled.h1`
    color: ${props => props.theme.light};
    font-family: ${props => props.theme.font};
    font-size: 3rem;
    margin: 3rem auto 1rem auto;
    text-align: center;
    letter-spacing: .05em;
    text-shadow: 3px 3px 0px ${props => props.theme.dark}, 5px 5px 0px ${props => props.theme.secondary};
`

const TitleInset = styled.h1`
    color: ${props => props.theme.light};
    font-family: ${props => props.theme.font};
    font-size: 3rem;
    margin: 3rem auto 1rem auto;
    text-align: center;
    background-color: transparent;
    letter-spacing: .2em;
    text-shadow: -2px -2px 0px ${props => props.theme.dark};, 2px 2px 2px ${props => props.theme.dark};
`


const Subtitle = styled.h1`
    color: ${props => props.theme.dark};
    font-family: ${props => props.theme.font};
    font-size: 1.5rem;
`

const Container = styled.div`
    max-width: 600px;
    padding-left: 1rem;
    line-height: 2rem;
`

const AboutContainer = styled.div`
    /** Flexbox container */
    display: flex;
    align-items: center;

    /** Mobile first */
    flex-direction: column;
    width: 90%;
    
    /** Desktop */
    @media only screen and (min-width: 768px) {
        flex-direction: row;
        margin: 5rem auto;
        justify-content: space-between;
    }

    font-family: ${props => props.theme.font};
    font-size: 1.1rem;
`
    
const PersonalData = styled.div`
    /** Flexbox container */
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    /** Mobile first */
    width: 90%;
    padding-bottom: 1rem;
    
    /** Desktop */
    @media only screen and (min-width: 768px) {
        width: 40%;
        height: 30rem;
        padding: 0;
    }

    border: 1px dotted ${props => props.theme.middle};
    border-radius: 10px;
    box-shadow: ${props => props.theme.light} 10px 10px 0px 0px;
`
    
const ProfilePicture = styled.img`
    /** Mobile first */
    min-width: 258px;
    min-height: 148px;
    width: 100%;
    height: inherit;
    background: url(${props => CV}) center no-repeat;
    background-size: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    
    /** Desktop */
    @media only screen and (min-width: 768px) {
        max-height: 264px;
        max-width: 460px;
    }
`

const Info = styled.div`
    /** Flexbox container */
    display: flex;
    flex-direction: row;
    height: 150px;
`

const LabelColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 50%;
    align-items: flex-end;
    justify-content: space-between;
`
    
const DataColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 50%;
    align-items: flex-start;
    justify-content: space-between;
`

const TitleSeparatorOld = styled.div`
    background: radial-gradient(ellipse farthest-side, rgba(0, 0, 0, 0.3) 13%, rgba(0, 0, 0, 0) 100%);
    height: 15px;
    width: 300px;
    border: 0;
    position: absolute;
    top: inherit;
    left: inherit;
    clip: rect(9px, 300px, 20px, 0px);
    display: flex;
    justify-content: center;
    margin: 0 auto 0 auto;
    `
    
const TitleSeparator = styled.div`
    width: 20%;
    height: 10px;
    margin: 0 auto;
    border-radius: 10px;
    border-top: 1px dotted ${props => props.theme.secondary};
    border-bottom: 2px solid ${props => props.theme.secondary};
    box-shadow: ${props => props.theme.secondary} 5px 5px 0px 0px;
`

const RowSeparator = styled.div`
    width: 100%;
    height: 5px;
    border-bottom: 1px solid ${props => props.theme.middle};
`

export { Container, Title, Subtitle, PersonalData, AboutContainer, ProfilePicture, LabelColumn, DataColumn, Info, TitleSeparator, RowSeparator, TitleInset, TitleRetro, TitleDeep }