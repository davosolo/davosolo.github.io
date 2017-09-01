import React from 'react'
import Banner from './../components/styledBanner'
import { Title, Subtitle, Container, PersonalData, AboutContainer, ProfilePicture, LabelColumn, DataColumn, Info, TitleSeparator, RowSeparator, TitleInset, TitleRetro, TitleDeep } from './../components/styledContainer'

const BannerLayout = props => (
    <Banner>
        <TitleRetro>{props.title}</TitleRetro>
    </Banner>
)

export default BannerLayout