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
}: LeadLinkProps) =>
  React.createElement(
    dynamicHeader(headerLevel),
    null,
    React.createElement(
      'button',
      { onClick, className: `${styles.lead} ${lightHover ? styles.lightHover : ''}` },
      text,
    ),
  )

export default LeadLink
