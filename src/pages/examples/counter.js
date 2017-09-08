import React from 'react'
import Header from './../../layouts/header'
import { Title, Container } from './../../components/styledContainer'

class Counter extends React.Component {
    constructor() {
        super()
        this.state = { count: 0, whateva: 'How you doing?' }
    }
    render() {
        return (
            <div>
                <Header/>
                <Container>
                    <Title>Counter</Title>
                    <p>current count: {this.state.count}</p>
                    <button onClick = {() => this.setState({count: this.state.count + 2})}>plus</button>
                    <button onClick = {() => this.setState({count: this.state.count - 1})}>minus</button>
                    <br/>
                    <br/>
                    <p>Whateva: {this.state.whateva}</p>
                </Container>
            </div>
        )
    }
}

export default Counter