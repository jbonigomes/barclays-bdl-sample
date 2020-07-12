import React from 'react'
import styles from './index.module.scss'
import { dynamicHeader } from '../../helpers'

type LeadLinkProps = {
  text: string,
  lightHover?: boolean,
  headerLevel?: number,
  onClick(e: React.MouseEvent<HTMLElement>): void,
}

const LeadLink: React.SFC<LeadLinkProps> = ({
  text,
  onClick,
  lightHover,
  headerLevel,
}: LeadLinkProps) => {
  const DynamicHeader = dynamicHeader(headerLevel)

  return (
    <DynamicHeader>
      <button
        onClick={onClick}
        className={`${styles.lead} ${lightHover ? styles.lightHover : ''}`}
      >
        {text}
      </button>
    </DynamicHeader>
  )
}

export default LeadLink
