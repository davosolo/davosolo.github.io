import React from "react"
import { Title, Subtitle, TextContainer, PersonalData, Container, ProfilePicture, LabelColumn, DataColumn, Info, TitleSeparator, RowSeparator } from './../components/styledContainer'

const ContainerLayout = props => (
    <section>
        <Container>
            <TextContainer>
                {props.children}
            </TextContainer>
        </Container>
    </section>
)

export default ContainerLayout