import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

export const identity = (e) => e

render(
  <React.StrictMode><App onClick={identity} /></React.StrictMode>,
  document.getElementById('root')
)
