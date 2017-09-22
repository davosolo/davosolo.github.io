import React from 'react'
import Banner from './../components/styledBanner'
import { Title, TitleLight, Subtitle, Container, PersonalData, AboutContainer, ProfilePicture, LabelColumn, DataColumn, Info, TitleSeparator, RowSeparator, TitleInset, TitleRetro, TitleDeep } from './../components/styledContainer'

const BannerLayout = props => (
    <Banner id = {props.id} backgroundImage = {props.backgroundImage} attachment = {props.attachment} height = {props.height}>
        <TitleLight>{props.title}</TitleLight>
        {props.children}
    </Banner>
)

export default BannerLayout