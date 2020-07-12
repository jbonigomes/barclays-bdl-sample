import React from 'react'
import styles from './index.module.scss'
import { dynamicHeader } from '../../helpers'

type LeadProps = {
  text: string,
  headerLevel?: number,
}

const Lead: React.SFC<LeadProps> = ({ text, headerLevel }: LeadProps) => {
  const DynamicHeader = dynamicHeader(headerLevel)

  return (
    <DynamicHeader className={`${styles.lead}`}>
      {text}
    </DynamicHeader>
  )
}

export default Lead
