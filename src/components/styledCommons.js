import React from 'react'
import styled from 'styled-components'

import { injectGlobal } from 'styled-components';

/*
 * Global Styles
 */
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Hammersmith+One');
body {
  font-family: 'Slabo 27px', serif;
  color: palevioletred;
  background: papayawhip;
  text-align: center;
}

a {
  color: palevioletred;
  &:hover, &:focus, &:visited {
    color: palevioletred;
  }
}
`