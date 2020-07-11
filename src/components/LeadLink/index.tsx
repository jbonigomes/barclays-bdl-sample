import React from 'react'
import styles from './index.module.scss'

type LeadLinkProps = {
  text: string,
  lightHover?: boolean,
  onClick(e: React.MouseEvent<HTMLElement>): void,
}

const LeadLink: React.SFC<LeadLinkProps> = ({
  text,
  onClick,
  lightHover,
}: LeadLinkProps) => (
  <div>
    <button
      onClick={onClick}
      className={`${styles.lead} ${lightHover ? styles.lightHover : ''}`}
    >
      {text}
    </button>
  </div>
)

export default LeadLink
