import React from 'react'
import Header from './../layouts/header'
import Title from './../components/Container/styledTitle'
import Container from './../components/Container/styledContainer'

class Counter extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
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
                </Container>
            </div>
        )
    }
}

export default Counter