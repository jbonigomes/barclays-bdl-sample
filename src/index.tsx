import React from 'react'

import { render } from 'react-dom'

import App from './components/App'

import { identity } from './helpers'

render(
  <React.StrictMode><App onClick={identity} /></React.StrictMode>,
  document.getElementById('root')
)
