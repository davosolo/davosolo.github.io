import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import Llamas from './../themes/llamas'

const TemplateWrapper = ({children}) => (
    <ThemeProvider theme={Llamas}>
      <div>
        <Helmet
          title="David Muñoz"
          meta={[
            { name: 'description', content: 'David Muñoz Web Site' },
            { name: 'keywords', content: 'davosolo, davidmzm, frontend, web developer' },
          ]}
        />
          {children()}
      </div>
    </ThemeProvider>
)

export default TemplateWrapper
