import React from 'react'
import Icon from '../Icon'
import styles from './index.module.scss'

type QuickLinkProps = {
  text: string,
  icon: 'card' | 'share' | 'transfer',
  onClick(e: React.MouseEvent<HTMLElement>): void,
}

const QuickLink: React.SFC<QuickLinkProps> = ({
  text,
  icon,
  onClick,
}: QuickLinkProps) => (
  <button onClick={onClick} className={styles.quickLink}>
    <div>
      <Icon type={icon} />
    </div>
    {text}
  </button>
)

export default QuickLink
