import React from 'react'
import styles from './index.module.scss'

type LeadProps = {
  text: string,
}

const Lead: React.SFC<LeadProps> = ({ text }: LeadProps) => (
  <div className={`${styles.lead}`}>
    {text}
  </div>
)

export default Lead
