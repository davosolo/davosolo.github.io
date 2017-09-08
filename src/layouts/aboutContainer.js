import React from "react"
import { Title, Subtitle, TextContainer, PersonalData, Container, ProfilePicture, LabelColumn, DataColumn, Info, TitleSeparator, RowSeparator } from './../components/styledContainer'

const ContainerLayout = props => (
    <section>
        <Title>
            {props.title}
        </Title>
        <Container>
            <TextContainer>
                {props.children}
            </TextContainer>
            <PersonalData>
                <ProfilePicture />
                <Info>
                    <LabelColumn>
                        <label><b>Name:&nbsp;</b></label>
                        <RowSeparator />
                        <label><b>Location:&nbsp;</b></label>
                        <RowSeparator />
                        <label><b>Phone:&nbsp;</b></label>
                        <RowSeparator />
                        <label><b>Email:&nbsp;</b></label>
                        <RowSeparator />
                        <label><b>Since:&nbsp;</b></label>
                    </LabelColumn>
                    <DataColumn>
                        <label>{props.name}</label>
                        <RowSeparator />
                        <label>{props.location}</label>
                        <RowSeparator />
                        <label>{props.phone}</label>
                        <RowSeparator />
                        <label>{props.email}</label>
                        <RowSeparator />
                        <label>{props.since}</label>
                    </DataColumn>
                </Info>
            </PersonalData>
        </Container>
    </section>
)

export default ContainerLayout