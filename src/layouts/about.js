import React from 'react'
import Container from './../components/Container/styledContainer'

const TemplateWrapper = ({children}) => 
    <ThemeProvider theme={Llamas}>
      <div>
        <Helmet
          title="David's Site"
          meta={[
            { name: 'description', content: 'David Muñoz Web Site' },
            { name: 'keywords', content: 'davosolo, davidmzm, frontend' },
          ]}
        />
        <Header/>
        <Container>
          {children()}
        </Container>
      </div>
    </ThemeProvider>

export default TemplateWrapper