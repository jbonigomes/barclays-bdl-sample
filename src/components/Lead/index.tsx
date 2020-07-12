import React from 'react'
import styles from './index.module.scss'
import { dynamicHeader } from '../../helpers'

type LeadProps = {
  text: string,
  headerLevel?: number,
}

const Lead: React.SFC<LeadProps> = ({ text, headerLevel }: LeadProps) =>
  React.createElement(
    dynamicHeader(headerLevel),
    { className: `${styles.lead}` },
    text
  )

export default Lead
